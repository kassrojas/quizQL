import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const SEARCH_USERS = gql`
  query searchUsers($term: String!) {
    searchUsers(term: $term) {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query searchCategories {
    searchCategories {
      category
    }
  }
`;

export const QUERY_QUESTIONS = gql`
  query searchQuestions($category: String!) {
    searchQuestions(category: $category) {
      question
      correct_answer
      incorrect_answers
      snippet
    }
  }
`;

export const QUERY_USERRESULTS = gql`
  query userResults {
    userResults {
      score
      category
    }
  }
`;

export const QUERY_USERRESULTS_BYCATEGORY = gql`
  query userResultsByCategory($user: String!, $category: String!) {
    userResultsByCategory(user: $user, category: $category) {
      score
      category
    }
  }
`;

export const QUERY_ALLRESULTS = gql`
  query allResults {
    allResults {
      score
      category
      user {
        username
      }
    }
  }
`;
