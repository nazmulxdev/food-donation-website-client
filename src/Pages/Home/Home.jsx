import React from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import LoadingSpinner from "../../Components/LoadingSpinner";

const Home = () => {
  return (
    <div>
      <p>this is home page</p>
      <LoadingSpinner></LoadingSpinner>
    </div>
  );
};

export default Home;
