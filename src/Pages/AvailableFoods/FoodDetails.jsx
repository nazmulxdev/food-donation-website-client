import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Countdown from "react-countdown";
import { Link, useLoaderData } from "react-router";

const FoodDetails = () => {
  const {
    foodName,
    foodImage,
    quantity,
    location,
    expiry,
    donarName,
    donarEmail,
    donarImg,
    notes,
    status,
  } = useLoaderData();

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-2 gap-8 bg-secondary shadow-lg rounded-lg p-6">
        {/* Food Image */}
        <motion.img
          src={foodImage}
          alt={foodName}
          className="rounded-lg w-full h-[350px] object-cover"
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />

        {/* Food Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">{foodName}</h2>

          <p className="text-gray-600">
            <FaMapMarkerAlt className="inline mr-2" />
            <span className="font-medium">Pickup Location:</span> {location}
          </p>

          <p className="text-gray-600">
            <FaClock className="inline mr-2" />
            <span className="font-medium">Expires In:</span>{" "}
            <Countdown
              date={new Date(expiry)}
              daysInHours={true}
              renderer={({ days, hours, minutes, seconds, completed }) =>
                completed ? (
                  <span className="text-red-500 font-semibold">Expired</span>
                ) : (
                  <span className="font-semibold">
                    {days}d {hours}h {minutes}m {seconds}s
                  </span>
                )
              }
            />
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Expiry Date:</span>{" "}
            {new Date(expiry).toLocaleDateString()}
          </p>

          <p className="text-gray-600">
            <span className="font-medium">Quantity:</span> {quantity}
          </p>

          <p className="text-gray-600">
            <span className="font-medium">Status:</span>{" "}
            <span
              className={`font-semibold ${
                status === "available" ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </span>
          </p>

          <div className="divider"></div>

          {/* Donor Info */}
          <div className="flex items-center gap-4">
            <img
              src={donarImg}
              alt={donarName}
              className="w-16 h-16 rounded-full border-2 border-primary"
            />
            <div>
              <p className="text-lg font-semibold text-accent flex items-center gap-2">
                <FaUser />
                {donarName}
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <FaEnvelope />
                {donarEmail}
              </p>
            </div>
          </div>

          <div className="divider"></div>

          <p className="text-gray-700">
            <span className="font-medium">Notes:</span> {notes}
          </p>

          <div className="grid grid-cols-2 justify-betweens gap-16">
            <Link
              to="/availableFoods"
              className="btn btn-primary text-white mt-4"
            >
              Go Back
            </Link>
            <button className="btn btn-primary text-white mt-4">
              Request Food
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodDetails;
