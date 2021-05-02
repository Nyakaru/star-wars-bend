import { IResolvers } from "graphql-tools";
import { merge } from "lodash";

import { PeopleResolvers } from "./resolvers";

const resolverMap: IResolvers = merge(PeopleResolvers);

export default resolverMap;
