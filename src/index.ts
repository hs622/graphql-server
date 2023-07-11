import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./graphql";
import { db } from './config/connection';

const server = new ApolloServer({ typeDefs, resolvers });

interface bootstrap {
  url: string
}

const bootstrap = async (): Promise<bootstrap> => {  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  db.createConnection('asdasd');

  return {
    url
  };
};

bootstrap()
.then((res) => {
  
  console.log(`🚀 Server ready at: ${res.url}`);
  // console.log(`🚀 Database is connected`);
});
