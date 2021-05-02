import express from "express";
import { ApolloServer } from "apollo-server-express";

import schema from "./graphql/schemasMap";
import { SwapAPI } from "./dataSource"

const PORT = 4000;

const app = express();
const server = new ApolloServer({
  schema,
  dataSources: () => ({
    swapAPI: new SwapAPI()
  }),
  introspection: true,
});


server.applyMiddleware({
  app,
  path: "/graphql",
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
