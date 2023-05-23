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
      registerInput: {
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

export const DELETE_USER = /* GraphQL */ gql`
  mutation deleteUser($id: ID!) {
    deleteUser(ID: $id) {
      id
    }
  }
`;
