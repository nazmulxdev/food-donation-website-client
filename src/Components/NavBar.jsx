import React from "react";
import { Link, NavLink } from "react-router";
import Avatar from "./Avatar";
import webLogo from "../assets/logo.png";

const NavBar = () => {
  const registerLInks = (
    <>
      <Avatar></Avatar>
      <NavLink className="btn bg-primary hover:bg-accent text-white">
        Register
      </NavLink>
    </>
  );
  const logInLinks = (
    <>
      <Link to="/login" className="btn bg-primary hover:bg-accent text-white">
        LogIn
      </Link>
      <Link
        to="/register"
        className="btn bg-primary hover:bg-accent text-white"
      >
        Register
      </Link>
    </>
  );
  const privateLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink>AvailableFoods</NavLink>
      </li>
      <li>
        <NavLink>AddFood</NavLink>
      </li>
      <li>
        <NavLink>ManageMyFoods</NavLink>
      </li>
      <li>
        <NavLink>MyFoodRequest</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow shadow-info">
      <div className="navbar max-w-screen mx-auto lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost px-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {privateLinks}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-16 sm:w-20 md:w-24" src={webLogo} alt="" />
            <div className="hidden lg:block ml-2">
              <h1 className="font-bold text-4xl text-primary"> Meals4Gaza</h1>
              <p className="text-sm text-[#4B4B4B] font-bold">
                Sharing Food, Supporting Palestine
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            {privateLinks}
          </ul>
        </div>
        <div className="navbar-end space-x-2">{logInLinks}</div>
      </div>
    </div>
  );
};

export default NavBar;
