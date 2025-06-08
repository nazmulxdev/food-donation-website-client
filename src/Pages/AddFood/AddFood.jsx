import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import { sweetError, sweetSuccess } from "../../Utilities/alert";

const AddFood = () => {
  const { currentUser } = useContext(AuthContext);
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const donatedMeal = Object.fromEntries(formData.entries());
    axios
      .post(`${import.meta.env.VITE_URL}/foodCollection`, donatedMeal)
      .then((data) => {
        if (data.data.insertedId) {
          sweetSuccess("Food added successfully");
          form.reset();
        }
      })
      .catch((error) => {
        sweetError(error);
      });
  };
  return (
    <div className="max-w-screen-2xl mx-auto p-4 my-8">
      <h1 className="text-3xl md:text-4xl font-bold text-primary my-4 text-center">
        Share a Meal, Spread the Blessing
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-center my-4">
        Got extra food or cooked meals to spare? Add them here and let your
        kindness reach the right hands. Every plate you share brings hope,
        dignity, and strength to someone in need.
      </p>
      <form
        onSubmit={handleAddFood}
        className="smx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-secondary p-6 rounded-2xl shadow-lg"
      >
        <div>
          <label className="label font-semibold">Food Name</label>
          <input
            name="foodName"
            placeholder="Food Name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold">Food Image URL</label>
          <input
            name="foodImage"
            placeholder="Food Image URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold">Food Quantity</label>
          <input
            name="quantity"
            placeholder="Food Quantity"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold">Pickup Location</label>
          <input
            name="location"
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
            placeholder="Additional Notes"
            className="textarea textarea-bordered w-full"
            rows={3}
          ></textarea>
        </div>
        <input type="hidden" name="status" value="available" />
        <div className="md:col-span-2">
          <button
            type="submit"
            className="btn bg-primary hover:bg-accent text-white w-full"
          >
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
