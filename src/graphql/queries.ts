import { gql } from "@apollo/client";

export const LOG_IN_QUERY = /* GraphQL */ gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(loginInput: { email: $email, password: $password }) {
      token
    }
  }
`;
