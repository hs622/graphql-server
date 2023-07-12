import userReslover from "./user";
import bookReslover from "./book";

export const resolvers = {
  Query: {
    ...userReslover.Query,
    ...bookReslover.Query,
  },

  Mutation: {
    ...userReslover.Mutation,
    ...bookReslover.Mutation,
  },
};
