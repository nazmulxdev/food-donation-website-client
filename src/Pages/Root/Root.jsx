import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
