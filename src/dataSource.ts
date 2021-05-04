import { RESTDataSource } from "apollo-datasource-rest";
import {
  Person,
  Planet,
  QueryPeopleArgs,
  QuerySearchPersonArgs,
  SearchResponse
} from "./generated/graphql";
import { PersonResponse } from "../interface";

export class SwapAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }
  async people(args: QueryPeopleArgs): Promise<Array<Person>> {
    const response: PersonResponse = await this.get(`people?page=${args["page"]}`);
    const result: Array<Person> = this.personReducer(response);
    return result;
  }

  async searchPerson(args: QuerySearchPersonArgs): Promise<SearchResponse> {
    const response: PersonResponse = await this.get(
      `people?search=${args["search"]}`
    );
    const result: Array<Person> = this.personReducer(response);
    const url = result[0].homeworld.split('/')[5];
    const planetResponse: Planet = await this.get(
      `planets/${url}`
    );
    return {
      person: result[0],
      homeworld: planetResponse
    }
  }

  personReducer(people: PersonResponse): Array<Person> {
    return people["results"].map((item) => {
      return {
        name: item.name,
        height: item.height,
        mass: item.mass,
        gender: item.gender,
        homeworld: item.homeworld,
      };
    });
  }
}
