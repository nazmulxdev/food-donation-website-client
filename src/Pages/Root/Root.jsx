import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky z-50 top-0">
        <NavBar></NavBar>
      </div>
      <main className="flex-grow">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
