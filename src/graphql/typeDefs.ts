export const typeDefs = `#graphql

  type Query {
    book(title: String!): Book
    books: [Book]
    userByName(first_name: String!): User
    userById(id: Int!): User
    users: [User]
  }
  
  type Book {
    _id: ID,
    title: String,
    description: String,
    publisher: String,
    releaseYear: Int,
    totalNoOfPage: Int,
    createdAt: String,
    updatedAt: String
  }

  type User {
    _id: ID,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    role: Role,
    country: String
    countryCode: Int,
    number: String,
    createdAt: String,
    updatedAt: String
  }

  type Mutation {
    createUser(user: UserInput): User
    createBook(book: BookInput): Book
    updateBook(_id: ID, book: BookInput): Book
  }

  input UserInput {
    first_name: String!,
    last_name: String,
    email: String!,
    password: String!,
    role: Role!,
    country: String!
    countryCode: Int,
    number: String
  }

  input BookInput {
    title: String!,
    description: String!,
    publisher: String!,
    releaseYear: Int!,
    totalNoOfPage: Int
  }
  
  enum Role {
    ADMIN,
    AUTHOR
  }
`;
