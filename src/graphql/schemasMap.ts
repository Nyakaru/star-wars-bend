import "graphql-import-node";

import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolversMap";
import * as peopleTypeDefs from "./schemas/people.graphql";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [peopleTypeDefs],
  resolvers,
});

export default schema;
