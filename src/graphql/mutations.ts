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
    $role: Role!
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
    }
  }
`;
