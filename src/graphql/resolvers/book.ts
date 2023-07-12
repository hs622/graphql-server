import { Book } from "../../models";

export default {
  Query: {
    books: async (contextValue: any) => {
      if (!contextValue.user) return null;
      await Book.find();
    },
    book: async (_: any, args: any) =>
      await Book.findOne({
        title: args.title,
      }),
  },

  Mutation: {
    createBook: (_: any, args: any) => {
      try {
        return Book.create({ ...args.book });
      } catch (err) {
        throw err;
      }
    },
    updateBook: async (_: any, args: any) => {
      try {
        return await Book.findByIdAndUpdate(
          args._id,
          { ...args.book },
          { new: true }
        );
      } catch (err) {
        throw err;
      }
    },
  },
};
