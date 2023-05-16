import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { auth } = useContext(AuthContext);
  

  if(localStorage.getItem("token")) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
