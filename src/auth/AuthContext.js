import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const accessToken = Cookies.get("jwt") || null;
  const [auth, setAuth] = useState({ isAuthenticated: accessToken });

  // below checks we can use for real jwt while it expired. Also we can extend it more by creating separate component for refresh token by which
  // we can get updated access token if it is not expired
  // if (accessToken) {
  //   const exp = jwtDecode(accessToken || "")?.exp || null;

  //   let currentDate = new Date();
  //   let timeNow = currentDate.getTime() + 2 * 23.8 * 60 * 60 * 1000;

  //   if (exp) {
  //     if (exp * 1000 < timeNow) {
  //       Cookies.remove("jwt");
  //     }
  //   } else {

  //   }

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
