import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import AllFetchApi from "../../AllApi/AllFetchApi";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { sweetError } from "../../Utilities/alert";
import Countdown from "react-countdown";
import { Link } from "react-router";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

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
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {featuredFoods?.map((food) => (
          <motion.div
            key={food._id}
            className="max-w-lg p-4 shadow-md bg-secondary"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            }}
          >
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
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-accent"
                    >
                      <Countdown
                        date={new Date(food.expiry)}
                        renderer={renderer}
                      />
                    </motion.span>
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="my-4 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary text-white"
        >
          <Link to="/availableFoods">Show All</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureFoods;
