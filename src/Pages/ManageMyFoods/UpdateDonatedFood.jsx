import React, { useContext, useEffect } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import AuthContext from "../../Context/AuthContext/AuthContext";
import useAllFetchApi from "../../AllApi/useAllFetchApi";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { sweetError, sweetSuccess } from "../../Utilities/alert";

const UpdateDonatedFood = () => {
  const { currentUser } = useContext(AuthContext);
  const { updateDonatedFoodAPI } = useAllFetchApi();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const food = useLoaderData();
  useEffect(() => {
    document.title = "Meals4Gaza | UpdateDonatedFood";
  }, []);

  const { mutate: updateFood } = useMutation({
    mutationFn: updateDonatedFoodAPI,
    onSuccess: (data) => {
      if (data.modifiedCount) {
        sweetSuccess("Food details updated successfully");
        navigate("/manageMyFoods");
        queryClient.invalidateQueries(["featuredFoods"]);
      } else {
        sweetError("Please Change at least one data field");
      }
    },
    onError: (error) => {
      sweetError(error.message || "Something went wrong deeply");
    },
  });

  const handleUpdateFoodData = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedFoodDetails = Object.fromEntries(formData.entries());
    console.log(updatedFoodDetails);
    updateFood({
      id: food._id,
      updatedData: {
        ...updatedFoodDetails,
        userEmail: currentUser?.email,
      },
    });
  };

  console.log(food);
  console.log(id);

  return (
    <div className="max-w-screen-2xl mx-auto my-8">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
        Update Donated Food Details
      </h1>
      <form
        onSubmit={handleUpdateFoodData}
        className="smx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl"
      >
        <div>
          <label className="label font-semibold">Food Name</label>
          <input
            name="foodName"
            defaultValue={food.foodName}
            placeholder="Food Name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold">Food Image URL</label>
          <input
            name="foodImage"
            defaultValue={food.foodImage}
            placeholder="Food Image URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold">Food Quantity</label>
          <input
            name="quantity"
            defaultValue={food.quantity}
            placeholder="Food Quantity"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold">Pickup Location</label>
          <input
            name="location"
            defaultValue={food.location}
            placeholder="Pickup Location"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold">Expired Date</label>
          <input
            type="date"
            name="expiry"
            defaultValue={
              food.expiry
                ? new Date(food.expiry).toISOString().split("T")[0]
                : ""
            }
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold">Donor Name</label>
          <input
            name="donarName"
            placeholder="Donor Name"
            value={currentUser?.displayName}
            readOnly
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold">Donor Email</label>
          <input
            name="donarEmail"
            placeholder="Donor Email"
            value={currentUser?.email}
            readOnly
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold">Donor Image URL</label>
          <input
            name="donarImg"
            value={currentUser?.photoURL}
            readOnly
            placeholder="Donor Image URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="label font-semibold">Additional Notes</label>
          <textarea
            name="notes"
            defaultValue={food.notes}
            placeholder="Additional Notes"
            className="textarea textarea-bordered w-full"
            rows={3}
          ></textarea>
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="btn rounded-lg bg-primary hover:bg-accent text-white w-full"
          >
            Update Food
          </button>
        </div>
      </form>
      <div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full border-t-2 border-primary my-4" />
          <p className="px-3 text-2xl font-bold text-primary">OR</p>
          <hr className="w-full border-t-2 border-primary my-4" />
        </div>
        <h1 className="font-bold text-center mb-8">
          Have changed mind?{" "}
          <Link to="/manageMyFoods" className="text-primary hover:underline">
            go back!
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default UpdateDonatedFood;
