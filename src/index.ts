import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./graphql";
import { createConnection } from './config';
import mongoose from "mongoose";
import { GraphQLError } from "graphql";
import { getUserFromToken } from "./helper";

const server = new ApolloServer({ typeDefs, resolvers });

interface bootstrap {
  url: string
  db: typeof mongoose
}

const bootstrap = async (): Promise<bootstrap> => {  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    // context: async ({ req }) => {
    //   const token = req.headers.authorization || '';
    //   const user = getUserFromToken(token);
  
    //   if (!user)
    //     throw new GraphQLError('User is not authenticated', {
    //       extensions: {
    //         code: 'UNAUTHENTICATED',
    //         http: { status: 401 },
    //       },
    //     });

    //   return { user };
    // },
  });
  const db = await createConnection({
    username: "hussain",
    password: "admin622",
    dbname: 'library_db',
  });

  return {
    url,
    db
  };
};

bootstrap()
.then((res) => {
  
  console.log(`🚀 Server ready at: ${res.url}`);
  console.log(`🚀 Database is connected`);
});
