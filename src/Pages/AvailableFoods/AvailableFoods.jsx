import { useEffect, useState } from "react";
import AllFetchApi from "../../AllApi/AllFetchApi";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { Link } from "react-router";

const AvailableFoods = () => {
  const { allAvailableFoodsAPI } = AllFetchApi();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("all");
  const [isThreeCol, setIsThreeCol] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(foods);

  useEffect(() => {
    setLoading(true);
    allAvailableFoodsAPI(sort, searchTerm).then((res) => {
      setFoods(res);
      setLoading(false);
    });
  }, [sort, searchTerm]);

  const getSortIndicator = () => {
    if (sort === "ascending") return <FaArrowUp></FaArrowUp>;
    if (sort === "descending") return <FaArrowDown></FaArrowDown>;
    return "";
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mt-8 my-4 text-center">
        All Available Meals
      </h1>
      <p className="text-gray-600  text-center px-8 mb-4 text-xl">
        Explore all the fresh and generously shared meals currently available.
        Find your perfect meal, reduce food waste, and support your community
        today!
      </p>
      <div className="mx-auto my-8 flex flex-col lg:flex-row space-y-4 justify-around items-center w-full">
        {/* short by */}
        <div>
          <label className="flex items-center justify-center text-accent text-semibold text-xl">
            Sort by Expiry Date {getSortIndicator()}
          </label>
          <select
            className="input text-primary text-center text-xl font-semibold mx-auto"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="all">All</option>
            <option value="ascending">Expire Date Ascending</option>
            <option value="descending">Expire Date Descending</option>
          </select>
        </div>

        {/* search by name */}

        <input
          className="input"
          type="text"
          placeholder="Search by food name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* change layout */}
        <div className="flex">
          <button
            onClick={() => setIsThreeCol(!isThreeCol)}
            className="btn btn-primary text-white rounded"
          >
            Change Layout
          </button>
        </div>
      </div>

      <div
        className={`grid gap-4 p-4 ${
          isThreeCol
            ? "grid-cols-1 md:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {loading ? (
          <div className="col-span-full flex justify-center items-center w-full">
            <LoadingSpinner></LoadingSpinner>
          </div>
        ) : (
          <>
            {foods?.map((food) => (
              <div key={food?._id} className="rounded-md shadow-xl">
                <img
                  src={food?.foodImage}
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide text-primary">
                      {food.foodName}
                    </h2>
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
                  </div>
                  <Link
                    to={`/foodDetails/${food._id}`}
                    type="button"
                    className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary hover:bg-accent text-white"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AvailableFoods;
