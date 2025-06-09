import React, { useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext/AuthContext";
import useAllFetchApi from "../../AllApi/useAllFetchApi";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { FaPen, FaTrash } from "react-icons/fa";

const MyFoodRequest = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { requestedFoodsByUserAPI } = useAllFetchApi();
  const {
    data: myRequestedFoods = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["requestedFoods", currentUser?.email],
    queryFn: () => requestedFoodsByUserAPI(currentUser.email),
    enabled: !!currentUser?.email,
  });
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="max-w-screen-2xl mx-auto my-8">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
        My Food Requests
      </h1>
      <p className="text-gray-600  text-center px-8 mb-4 max-w-5xl mx-auto">
        Track all the food requests you’ve made. Here you can view the status of
        each request, see who the donor is, and follow up if needed. Your
        support brings hope to those in need — thank you for being a part of
        Meals4Gaza.
      </p>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-primary font-bold text-xl">
              <tr>
                <th>No.</th>
                <th>Food Name</th>
                <th>Donar Name</th>
                <th>Pickup Location</th>
                <th>Request Date</th>
                <th>Expire Date</th>
              </tr>
            </thead>
            <tbody>
              {myRequestedFoods?.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-10">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <p className="text-lg font-semibold text-primary">
                        You haven’t any requested meal yet!!!
                      </p>
                      <button
                        onClick={() => navigate("/availableFoods")}
                        className="btn btn-sm btn-primary text-white"
                      >
                        Request food
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                myRequestedFoods?.map((food, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={food.foodImage} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{food.foodName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="font-bold">{food.donarName}</td>
                    <td className="font-bold">{food.pickupLocation}</td>
                    <td className="font-bold">
                      {new Date(food.requestDate).toLocaleDateString()}
                    </td>
                    <td className="font-bold">
                      {new Date(food.expiryDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequest;
