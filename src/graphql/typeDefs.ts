
export const typeDefs = `#graphql

  type Query {
    book(title: String!): Book
    books: [Book]!
    author(first_name: String!): Author
    authorById(id: Int!): Author
    authors: [Author]
  }

  type Book {
    id: Int, 
    title: String,
    authorId: Int,
    author: Author
  }

  type Author {
    id: Int,
    first_name: String,
    last_name: String,
    email: String,
    numberOfBooks: Int,
    books: [Book]
  }

`;