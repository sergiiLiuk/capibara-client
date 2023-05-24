import { gql } from "@apollo/client";

export const GET_CURRENT_USER_QUERY = /* GraphQL */ gql`
  query CurrentUser {
    currentUser {
      id
      username
      role
    }
  }
`;

export const GET_USERS_QUERY = /* GraphQL */ gql`
  query Users {
    users {
      id
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
      id
      username
      role
      createdAt
      email
    }
  }
`;

export const GET_PROJECTS_QUERY = /* GraphQL */ gql`
  query getProjects {
    projects {
      id
      name
      description
      createdAt
      company {
        id
        name
      }
    }
  }
`;

export const GET_PROJECT_QUERY = /* GraphQL */ gql`
  query ($id: ID!) {
    project(ID: $id) {
      id
      name
      description
      createdAt
      company {
        id
        name
      }
    }
  }
`;
