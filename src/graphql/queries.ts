import { gql } from "@apollo/client";

export const GET_CURRENT_USER_QUERY = /* GraphQL */ gql`
  query CurrentUser {
    currentUser {
      username
      role
    }
  }
`;

export const GET_USERS_QUERY = /* GraphQL */ gql`
  query Users {
    users {
      username
      role
      createdAt
      email
    }
  }
`;

export const GET_USER_QUERY = /* GraphQL */ gql`
  query User($id: ID!) {
    user(ID: $id) {
      username
      role
      createdAt
      email
    }
  }
`;
