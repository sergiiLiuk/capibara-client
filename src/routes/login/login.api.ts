import { gql, useMutation } from "@apollo/client";
import { User } from "../../gql/graphql";

const LOG_IN_QUERY = /* GraphQL */ gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(loginInput: { email: $email, password: $password }) {
      token
    }
  }
`;

interface LoginVariables {
  email: string;
  password: string;
}

export function useLogin() {
  const [login, { loading, error }] = useMutation<
    { loginUser: User },
    LoginVariables
  >(LOG_IN_QUERY, {
    // onCompleted: ({ login }) => {
    //   console.log("IO: ", login);
    // },
  });

  return { login, loading, error };
}
