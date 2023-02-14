const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    results: [Results]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Results {
    _id: ID
    user: User
    score: Int
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
    userResults(user: String!): [Results]  
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addScore(score: Int!, user: ID!): Results
  }
`;

module.exports = typeDefs;
