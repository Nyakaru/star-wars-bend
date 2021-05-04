import { IResolvers } from "graphql-tools";

export const PeopleResolvers: IResolvers = {
  Query: {
    searchPerson: (_, { search }, { dataSources }) =>
      dataSources.swapAPI.searchPerson({ search }),
    people: (_, { page }, { dataSources }) =>
      dataSources.swapAPI.people({ page })
  },
};
