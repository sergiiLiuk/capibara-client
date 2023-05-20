import { AUTH_TOKEN } from "../constants";

export const useAuthToken = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);

  const setAuthToken = (authToken: string | undefined) => {
    if (!authToken) return;
    localStorage.setItem(AUTH_TOKEN, authToken);
  };

  const removeAuthToken = () => localStorage.removeItem(AUTH_TOKEN);

  return { authToken, setAuthToken, removeAuthToken };
};
