import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  let location = useLocation();
  const token = Cookies.get("token");
  // fix the bug that the user is logged in but the token is not set
  if (!user.isAuthenticated && !token) {
    return (
      <Navigate to="/users/auth/login" state={{ from: location }} replace />
    );
  }
  return children;
};

export default ProtectedRoute;
