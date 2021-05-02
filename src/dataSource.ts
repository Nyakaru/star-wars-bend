import { RESTDataSource } from "apollo-datasource-rest";
import {
  Person,
  QueryPeopleArgs,
  QuerySearchPersonArgs,
} from "./generated/graphql";
import { PersonResponse } from "../interface";

export class SwapAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/people/";
  }
  async people(args: QueryPeopleArgs): Promise<Array<Person>> {
    const response: PersonResponse = await this.get(`?page=${args["page"]}`);
    const result: Array<Person> = this.personReducer(response);
    return result;
  }

  async searchPerson(args: QuerySearchPersonArgs): Promise<Person> {
    const response: PersonResponse = await this.get(
      `?search=${args["search"]}`
    );
    const result: Array<Person> = this.personReducer(response);
    return result[0];
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
