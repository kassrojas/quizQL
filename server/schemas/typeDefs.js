const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    result: [Result]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Result {
    _id: ID
    user: User
    score: Int
    category: String
  }

  type Question {
    _id: ID
    category: String
    question: String
    correct_answer: String
    incorrect_answers: [String]
    difficulty: String
    snippet: String
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    searchUsers(term: String!): [User]!
    me: User
    allQuestions: [Question]!
    searchQuestions(category: String!): [Question]!
    searchCategories: [Question]! 
    allResults: [Result]!
    userResults(user: String!): [Result]  
    userResultsByCategory(user: String!, category: String!): [Result]
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addScore(user: ID!, score: Int!, category: String!): Result
  }
`;

module.exports = typeDefs;
