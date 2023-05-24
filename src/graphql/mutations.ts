import { gql } from "@apollo/client";

export const LOG_IN_QUERY = /* GraphQL */ gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(loginInput: { email: $email, password: $password }) {
      token
    }
  }
`;

export const REGISTER_USER_MUTATION = /* GraphQL */ gql`
  mutation RegisterUser(
    $email: String!
    $password: String!
    $username: String!
    $role: RoleType!
  ) {
    registerUser(
      userInput: {
        email: $email
        password: $password
        username: $username
        role: $role
      }
    ) {
      id
      username
      role
      createdAt
      email
    }
  }
`;

export const UPDATE_USER_MUTATION = /* GraphQL */ gql`
  mutation UpdateUser($id: ID!, $email: String!, $username: String!) {
    updateUser(ID: $id, userInput: { username: $username, email: $email }) {
      username
      email
    }
  }
`;

export const DELETE_USER = /* GraphQL */ gql`
  mutation deleteUser($id: ID!) {
    deleteUser(ID: $id) {
      id
    }
  }
`;

export const UPDATE_PROJECT_MUTATION = /* GraphQL */ gql`
  mutation updateProject($id: ID!, $name: String!, $description: String!) {
    updateProject(
      ID: $id
      projectInput: { name: $name, description: $description }
    ) {
      id
      name
      description
    }
  }
`;
