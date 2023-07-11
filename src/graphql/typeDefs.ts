
export const typeDefs = `#graphql

  type Query {
    book(title: String!): Book
    books: [Book]
    user(first_name: String!): User
    userById(id: Int!): User
    users: [User]
  }

  type Book {
    id: Int,
    title: String,
    description: String,
    releaseYear: String,
    publisher: String,
    totalNoOfPage: Int
  }

  type User {
    id: Int,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    role: String,
    country: String
    countryCode: Int,
    number: Int 
  }

`;