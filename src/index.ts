import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./graphql";
import { createConnection } from './config';

const server = new ApolloServer({ typeDefs, resolvers });

interface bootstrap {
  url: string
}

const bootstrap = async (): Promise<bootstrap> => {  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  await createConnection('mongodb+srv://hussain:admin622@mycluster.j9x9zgh.mongodb.net/', {
    dbname: 'library_db',
  });

  return {
    url
  };
};

bootstrap()
.then((res) => {
  
  console.log(`🚀 Server ready at: ${res.url}`);
  console.log(`🚀 Database is connected`);
});
