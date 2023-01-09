import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { login } from "../features/users/userSlice";

const AdminGuard = ({ children }) => {
  let location = useLocation();
  const user = useSelector((state) => state.user);
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  if (!token) {
    return <Navigate to="/admin/auth/login" />;
  }
  const decodedUser = jwt_decode(token);
  if (!user.email) {
    dispatch(login(decodedUser.user));
  }
  console.log(user);
  console.log(decodedUser);
  if (
    user.authority_level !== "admin" &&
    user.authority_level !== "astronaut"
  ) {
    return <Navigate to="/admin/auth/login" />;
  } else if (
    decodedUser.user.authority_level !== "admin" &&
    decodedUser.user.authority_level !== "astronaut"
  ) {
    return <Navigate to="/admin/auth/login" />;
  } else return children;
};

export default AdminGuard;
