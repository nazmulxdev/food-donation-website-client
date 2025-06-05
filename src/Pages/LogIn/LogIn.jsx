import React from "react";
import { Link } from "react-router";
import NavBar from "../../Components/NavBar";

const LogIn = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-lg mx-auto card bg-secondary w-full shrink-0 shadow-2xl mt-16">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center text-primary">
            Login now!
          </h1>
          <form className="fieldset space-y-1">
            <label className="label text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label text-lg font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
            />
            <div className="text-end">
              <Link
                rel="noopener noreferrer"
                className="text-xs hover:underline font-medium text-primary"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="btn bg-white border-info text-primary hover:bg-primary hover:text-white mt-4"
            >
              Login
            </button>
          </form>
          <div className="flex items-center w-full my-4">
            <hr className="w-full border-t-2 border-primary my-4" />
            <p className="px-3 font-bold text-primary">OR</p>
            <hr className="w-full border-t-2 border-primary my-4" />
          </div>
          <div className="space-y-4">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-4 space-x-4 rounded-md focus:ring-2 focus:ring-offset-1 hover:bg-accent font-bold bg-primary text-white hover:border hover:text-white hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
            <p className="text-sm text-center font-medium">
              Don't have account?
              <Link
                to="/register"
                state={location.state}
                rel="noopener noreferrer"
                className="focus:underline hover:underline text-primary"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
