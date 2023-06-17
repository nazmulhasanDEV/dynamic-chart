// import useE
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "./AuthContext";

const RequireAuth = ({ children }) => {
  const { auth, setAuth } = useAuth();

  if (!auth?.isAuthenticated) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default RequireAuth;
