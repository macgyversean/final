import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../components/navigation";
import { useAuth } from "../AuthContext";
import Layout from "./Layout";

const ProtectedLayout = () => {
  const { isAuth } = useAuth();
  //check if user is authenticated
  if (!isAuth) {
    // if not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }
  // if autheticated, render the child routes...
  return <Layout />;
};

export default ProtectedLayout;
