import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const ManageMyFoods = () => {
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
              <tr>
                <th>1.</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <th>
                  <div className="space-x-2">
                    <button className="btn btn-sm btn-primary text-white text-base font-bold">
                      <FaTrash></FaTrash>
                    </button>
                    <button className="btn btn-sm btn-primary text-white text-base font-bold">
                      <FaPen></FaPen>
                    </button>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMyFoods;
