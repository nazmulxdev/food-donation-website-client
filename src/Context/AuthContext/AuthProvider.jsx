import React from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const authData = {
    email: "nazmulxdev",
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
