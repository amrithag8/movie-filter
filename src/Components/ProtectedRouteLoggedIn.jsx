import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
const ProtectedRouteLoggedIn = () => {
  const { auth } = useContext(AuthContext);

  if (!localStorage.getItem("token")) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

export default ProtectedRouteLoggedIn;
