import React, { useEffect } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Banner from "./Banner";
import Volunteer from "./Volunteer";
import Stories from "./Stories";
import FeatureFoods from "./FeatureFoods";

const Home = () => {
  useEffect(() => {
    document.title = "Meals4Gaza | Home";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <FeatureFoods></FeatureFoods>
      <Volunteer></Volunteer>
      <Stories></Stories>
    </div>
  );
};

export default Home;
