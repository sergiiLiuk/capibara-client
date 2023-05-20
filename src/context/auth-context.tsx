import jwtDecode, { JwtPayload } from "jwt-decode";
import React, { Reducer, createContext, useReducer } from "react";
import { AUTH_TOKEN } from "../constants";
import { User } from "../gql/graphql";
import { useAuthToken } from "../hooks/useAuthToken ";

type AuthContextType = {
  user: User | null;
};

type AuthAction = { type: "LOGIN"; user: User } | { type: "LOGOUT" };

const initialState: AuthContextType = {
  user: null,
};

const { authToken } = useAuthToken();

//TODO: implement jwt token payload type

if (authToken) {
  const decodedToken = jwtDecode(authToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem(AUTH_TOKEN);
  } else {
    console.log(decodedToken);

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
  const { setAuthToken, removeAuthToken } = useAuthToken();

  const login = (user: User) => {
    setAuthToken(user.token);

    dispatch({
      type: "LOGIN",
      payload: user,
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
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
