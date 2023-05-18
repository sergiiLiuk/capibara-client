import { gql, useMutation } from "@apollo/client";

const LOG_IN_QUERY = /* GraphQL */ gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(loginInput: { email: $email, password: $password }) {
      username
      token
    }
  }
`;

interface LoginVariables {
  email: string;
  password: string;
}

export function useLogin() {
  const [login, { data }] = useMutation<any, LoginVariables>(LOG_IN_QUERY, {
    // onCompleted: ({ login }) => {
    //   console.log("IO: ", login);
    // },
  });
  return { login, data };
}
