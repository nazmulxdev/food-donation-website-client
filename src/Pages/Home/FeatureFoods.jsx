import React from "react";
import AllFetchApi from "../../AllApi/AllFetchApi";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { sweetError } from "../../Utilities/alert";
import Countdown from "react-countdown";
import { Link } from "react-router";

const FeatureFoods = () => {
  const { allFeaturedFoodsAPI } = AllFetchApi();

  const {
    data: featuredFoods,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["featuredFoods"],
    queryFn: allFeaturedFoodsAPI,
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (isError) {
    sweetError(error?.message || "This error is unknown error");
    return (
      <p className="text-primary text-2xl text-center font-bold my-8">
        Failed to load featured foods.
      </p>
    );
  }

  const renderer = ({ days, hours, minutes, seconds, complete }) => {
    if (complete) {
      return <span>Expired</span>;
    } else {
      return (
        <span>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  console.log(featuredFoods);

  return (
    <div className="bg-white py-16 px-4 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
        Featured Foods
      </h1>
      <p className="text-gray-600  text-center px-8 mb-4">
        Discover the most generously shared meals available right now. These
        top-listed food donations are fresh, high in quantity, and ready for
        pickup. Act fast and help reduce food waste while supporting the
        community!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredFoods?.map((food) => (
          <div key={food._id} className="max-w-lg p-4 shadow-md bg-secondary">
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={food.foodImage}
                  alt=""
                  className="block object-cover object-center w-full rounded-md h-72"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">
                  {food.foodName}
                </h3>
                <p className="font-semibold">
                  Available Quantity:{" "}
                  <span className="text-accent">{food.quantity}</span>
                </p>
                <p className="font-semibold">
                  Expire Date:{" "}
                  <span className="text-accent">
                    {food.expiry.split("T")[0]}
                  </span>{" "}
                </p>
                <p className="font-semibold">
                  Expire In:{" "}
                  <span className="text-accent">
                    {" "}
                    <Countdown
                      date={new Date(food.expiry)}
                      renderer={renderer}
                    ></Countdown>
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-4 text-center">
        <Link to="/availableFoods" className="btn btn-primary text-white">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default FeatureFoods;
