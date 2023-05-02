import { GraphQLClient } from "graphql-request";
import { nhost } from "./nhost";

type AuthHeaderProps = {
  authorization?: string;
};

export const gqlClient = new GraphQLClient(nhost.graphql.httpUrl, {
  headers: () => {
    const authHeaders = {} as AuthHeaderProps;

    if (nhost.auth.isAuthenticated()) {
      authHeaders["authorization"] = `Bearer ${nhost.auth.getAccessToken()}`;
    }

    return {
      "Content-Type": "application/json",
      ...authHeaders,
    };
  },
});
