import React, { useContext } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import AuthContext from "../../Context/AuthContext/AuthContext";
import useAllFetchApi from "../../AllApi/useAllFetchApi";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { useNavigate } from "react-router";

const ManageMyFoods = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { donarFoodAPI } = useAllFetchApi();
  const {
    data: myFoods = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["donarFoods", "abc@gmail.com"],
    queryFn: () => donarFoodAPI(currentUser.email),
    enabled: !!currentUser?.email,
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (isError) {
    return <p>Error:{error.message}</p>;
  }

  console.log(myFoods);
  return (
    <div className="max-w-screen-2xl mx-auto my-8">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
        Manage My Foods
      </h1>
      <p className="text-gray-600  text-center px-8 mb-4">
        View, update, or delete your shared food items. Keep track of your
        contributions and manage food availability in one place.
      </p>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-primary font-bold text-xl">
              <tr>
                <th>No.</th>
                <th>Food Name</th>
                <th>Status</th>
                <th>Expire Date</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {myFoods.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-10">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <p className="text-lg font-semibold text-primary">
                        You haven’t shared any meal yet!!!
                      </p>
                      <button
                        onClick={() => navigate("/addFood")}
                        className="btn btn-sm btn-primary text-white"
                      >
                        Donate food
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                myFoods?.map((food, index) => (
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
                    <td>
                      {food.status === "available" ? (
                        <p className="font-bold text-green-600">
                          {food.status}
                        </p>
                      ) : (
                        <p className="font-bold text-primary">{food.status}</p>
                      )}
                    </td>
                    <td className="font-bold text-primary">
                      {new Date(food.expiry).toLocaleDateString()}
                    </td>
                    <th>
                      <div className="flex gap-2">
                        <button className="btn btn-sm btn-primary text-white text-base font-bold">
                          <FaTrash></FaTrash>
                        </button>
                        <button className="btn btn-sm btn-primary text-white text-base font-bold">
                          <FaPen></FaPen>
                        </button>
                      </div>
                    </th>
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

export default ManageMyFoods;
