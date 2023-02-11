const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Results {
    _id: ID
    userId: User
    score: Int
  }

  type Leaderboard {
    _id: ID
    category: Category
    results: Results
  }

  type Category {
    _id: ID
    categoryId: Int
    name: String
  }

  type Quiz {
    _id: ID
    category: Category
    type: String
    question: String
    correct_answer: String
    incorrect_answers: [String]
    difficulty: String
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    searchUsers(term: String!): [User]!
    me: User
    categories: [Category]!
    category(categoryId: Int!): Category
    quizzes: [Quiz]!
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
