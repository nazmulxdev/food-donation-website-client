import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const signInEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  console.log(currentUser);

  const authData = {
    currentUser,
    loading,
    setCurrentUser,
    registerUser,
    signInGoogle,
    signInEmailPassword,
    logOutUser,
    updateUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
