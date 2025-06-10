import React, { useEffect } from "react";
import errorAnimation from "../../../public/Animation - 1749536815158.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Meals4Gaza | ErrorPage";
  }, []);
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <Lottie animationData={errorAnimation}></Lottie>
          <p className="text-primary text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded  btn btn-primary text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
