import { isNil } from "lodash";
import jwt_decode from "jwt-decode";

export const isAuthenticated = (): boolean => {
  const accessToken = localStorage.getItem('accessToken');

  if (isNil(accessToken)) {
    return false;
  }

  // Ensure token is not expired
  const { exp } = jwt_decode(accessToken);

  if (Date.now() >= exp * 1000) {
    // Purge token from local storage
    purgeToken();
    return false;
  }

  return true;
};

export const purgeToken = () => {
  localStorage.removeItem("accessToken");
};

export const getTokenFromLocalStorage = () => {
  const accessToken = localStorage.getItem('accessToken');

  if (isNil(accessToken)) {
    return null;
  }

  // Ensure token is not expired
  return jwt_decode(accessToken);
};