import React, { useEffect } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Banner from "./Banner";
import Volunteer from "./Volunteer";
import Stories from "./Stories";
import FeatureFoods from "./FeatureFoods";
import HowToWorks from "./HowToWork";
import PartnerTrustBadges from "./PartnerTrustBadges";
import CommunityChallenge from "./CommunityChallenge";

const Home = () => {
  useEffect(() => {
    document.title = "Meals4Gaza | Home";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <FeatureFoods></FeatureFoods>
      <HowToWorks></HowToWorks>
      <Volunteer></Volunteer>
      <PartnerTrustBadges></PartnerTrustBadges>
      <Stories></Stories>
      <CommunityChallenge></CommunityChallenge>
    </div>
  );
};

export default Home;
