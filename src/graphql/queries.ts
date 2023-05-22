import { gql } from "@apollo/client";

export const CURRENT_USER_QUERY = /* GraphQL */ gql`
  query CurrentUser {
    currentUser {
      username
    }
  }
`;
