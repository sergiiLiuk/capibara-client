import jwtDecode from "jwt-decode";
import React, { Reducer, createContext, useReducer } from "react";
import { AUTH_TOKEN } from "../constants";
import { User } from "../gql/graphql";

type AuthContextType = {
  user: User | null;
};

type AuthAction = { type: "LOGIN"; user: User } | { type: "LOGOUT" };

const initialState: AuthContextType = {
  user: null,
};

if (localStorage.getItem(AUTH_TOKEN)) {
  const decodedToken: string | undefined = jwtDecode(
    localStorage.getItem(AUTH_TOKEN)
  );
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem(AUTH_TOKEN);
  } else {
    initialState.user = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData: User) => {},
  logout: () => {},
});

const authReducer: Reducer<AuthContextType, AuthAction> = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user: User) => {
    localStorage.setItem(AUTH_TOKEN, user.token!);
    dispatch({
      type: "LOGIN",
      payload: user,
    });
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
