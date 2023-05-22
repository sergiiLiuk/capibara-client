import jwtDecode from "jwt-decode";
import React, { Reducer, createContext, useReducer } from "react";
import { AUTH_TOKEN } from "../constants";
import { User } from "../gql/graphql";
import { useAuthToken } from "../hooks/useAuthToken ";

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

type AuthAction = { type: "LOGIN"; user: User } | { type: "LOGOUT" };

const initialState: AuthContextType = {
  isAuthenticated: false,
  user: null,
  login: () => Promise.resolve(),
  logout: () => {},
};

const { authToken } = useAuthToken();

if (authToken) {
  const decodedToken: {
    user_id: string;
    email: string;
    iat: number;
    exp: number;
  } = jwtDecode(authToken);

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem(AUTH_TOKEN);
  } else {
    initialState.user = decodedToken;
    initialState.isAuthenticated = true;
  }
}

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: (userData: User) => {},
  logout: () => {},
});

const authReducer: Reducer<
  { isAuthenticated: boolean; user: User | null },
  AuthAction
> = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.user,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

function AuthProvider(props: any) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { setAuthToken, removeAuthToken } = useAuthToken();

  const login = (user: User) => {
    setAuthToken(user.token!);
    dispatch({
      type: "LOGIN",
      user: user,
    });
  };

  const logout = () => {
    removeAuthToken();
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        login,
        logout,
      }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
