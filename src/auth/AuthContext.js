import { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const accessToken = Cookies.get("jwt") || null;
  const exp = jwtDecode(accessToken)?.exp || null;

  let currentDate = new Date();
  let timeNow = currentDate.getTime() + 2 * 23.8 * 60 * 60 * 1000;

  if (exp) {
    if (exp * 1000 < timeNow) {
      Cookies.remove("jwt");
    }
  }

  useEffect(() => {
    setAuth({ ...auth, isAuthenticated: accessToken ? true : false });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
