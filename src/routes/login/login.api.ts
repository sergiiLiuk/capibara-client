import { gql } from "@apollo/client";

const GET_CURRENT_USER = /* GraphQL */ gql`
  {
    currentUser {
      firstname
      lastname
    }
  }
`;

const LOG_IN_QUERY = /* GraphQL */ gql`
  query loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;
