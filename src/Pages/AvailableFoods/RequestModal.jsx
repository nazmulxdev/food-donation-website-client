import { motion } from "framer-motion";
import { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import useAllFetchApi from "../../AllApi/useAllFetchApi";
import { sweetError, sweetSuccess } from "../../Utilities/alert";

const RequestModal = ({ food, onClose, onRequestSuccess }) => {
  const [notes, setNotes] = useState("");

  const { currentUser } = useContext(AuthContext);

  const currentDate = new Date().toLocaleString();
  const { requestFoodAPI } = useAllFetchApi();

  const handleSubmit = () => {
    const requestData = {
      foodId: food._id,
      foodName: food.foodName,
      foodImage: food.foodImage,
      donarEmail: food.donarEmail,
      donarName: food.donarName,
      userEmail: currentUser.email,
      requestDate: currentDate,
      pickupLocation: food.location,
      expiryDate: new Date(food.expiry).toLocaleString(),
      notes,
    };

    console.log("Submitting Request:", requestData);
    requestFoodAPI(requestData)
      .then((data) => {
        console.log(data);
        sweetSuccess("Food requested Successfully");
        onRequestSuccess();
      })
      .catch((error) => {
        sweetError(error);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold text-primary mb-4">Request Food</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold">Food Name</label>
            <input
              className="input input-bordered"
              value={food.foodName}
              readOnly
              type="text"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Food ID</label>
            <input
              className="input input-bordered"
              value={food._id || "N/A"}
              readOnly
              type="text"
            />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Food Image</label>
            <img
              src={food.foodImage}
              alt="Food"
              className="w-full h-40 object-cover rounded-md border"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Donator Name</label>
            <input
              className="input input-bordered"
              value={food.donarName}
              readOnly
              type="text"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Donator Email</label>
            <input
              className="input input-bordered"
              value={food.donarEmail}
              readOnly
              type="email"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">
              User Email (Requested)
            </label>
            <input
              className="input input-bordered"
              value={currentUser.email}
              readOnly
              type="email"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Request Date</label>
            <input
              className="input input-bordered"
              value={currentDate}
              readOnly
              type="text"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Pickup Location</label>
            <input
              className="input input-bordered"
              value={food.location}
              readOnly
              type="text"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Expire Date</label>
            <input
              className="input input-bordered"
              value={new Date(food.expiry).toLocaleString()}
              readOnly
              type="text"
            />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Additional Notes</label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Any message to the donor?"
              defaultValue={food.notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="btn border-primary bg-white text-primary hover:text-white hover:bg-primary"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary text-white hover:bg-accent"
          >
            Request
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RequestModal;
