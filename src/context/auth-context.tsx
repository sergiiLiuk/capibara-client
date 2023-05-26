import jwtDecode from "jwt-decode";
import React, { Reducer, createContext, useReducer } from "react";
import { AUTH_TOKEN } from "../constants";
import { RoleType, User } from "../gql/graphql";
import { useAuthToken } from "../hooks/useAuthToken ";

type AuthUserType = {
  user_id: string;
  email: string;
  iat: number;
  exp: number;
  role: RoleType;
  token?: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  userId: string | null;
  role: RoleType | null;
  login: (user: User) => void;
  logout: () => void;
};

type AuthAction =
  | { type: "LOGIN"; userId: string; role: RoleType }
  | { type: "LOGOUT" };

const initialState: AuthContextType = {
  userId: null,
  role: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};

const { authToken } = useAuthToken();

if (authToken) {
  const decodedToken: AuthUserType = jwtDecode(authToken);

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem(AUTH_TOKEN);
  } else {
    initialState.userId = decodedToken.user_id;
    initialState.role = decodedToken.role;
    initialState.isAuthenticated = true;
  }
}

const AuthContext = createContext<AuthContextType>(initialState);

const authReducer: Reducer<
  { isAuthenticated: boolean; userId: string | null; role: RoleType | null },
  AuthAction
> = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userId: action.userId,
        role: action.role,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        userId: null,
        role: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { setAuthToken, removeAuthToken } = useAuthToken();

  const login = (user: User) => {
    setAuthToken(user.token!);
    dispatch({
      type: "LOGIN",
      userId: user.id,
      role: user.role,
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
        userId: state.userId,
        role: state.role as RoleType,
        isAuthenticated: state.isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
