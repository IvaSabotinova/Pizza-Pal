import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Paths from "../constants/Paths";


export default function AuthGuard() {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    
    return < Navigate to={Paths.Login} />
  }

  return <Outlet />;
}