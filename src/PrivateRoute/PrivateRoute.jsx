import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (currentUser) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
