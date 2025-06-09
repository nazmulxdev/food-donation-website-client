import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

const useAllFetchApi = () => {
  const baseUrl = import.meta.env.VITE_URL;

  const axiosSecure = useAxiosSecure();
  // post method for adding food details in db
  const addFoodAPI = async (foodData) => {
    const response = await axios.post(`${baseUrl}/foodCollection`, foodData);
    return response.data;
  };

  // get method to get 6 most quantity food
  const allFeaturedFoodsAPI = async () => {
    const response = await axios.get(`${baseUrl}/featureFoods`);
    return response.data;
  };

  // get method to get all available food with implementing shorting

  const allAvailableFoodsAPI = async (sort = "all", search = "") => {
    const response = await axios.get(`${baseUrl}/foodCollection`, {
      params: { sort, search },
    });
    return response.data;
  };

  // get specific foods by their id

  // post method for food request

  const requestFoodAPI = async (requestFood) => {
    const response = await axiosSecure.post(
      `/requestedFoods`,
      requestFood,
    );
    return response.data;
  };

  // get method to get specific donar shared food

  const donarFoodAPI = async (email) => {
    const response = await axiosSecure.get(
      `/donatedFoods?email=${email}`,
    );
    return response.data;
  };

  // get method to get requested food by specific requested user

  const requestedFoodsByUserAPI = async (email) => {
    const response = await axiosSecure.get(
      `/requestedFoods?email=${email}`,
    );
    return response.data;
  };

  // put method to update donated food by user
  const updateDonatedFoodAPI = async ({id, updatedData}) => {
    const response = await axiosSecure.put(
      `/foodCollection/${id}`,
      updatedData,
    );
    return response.data;
  };


  // delete method to delete donated food from database
  const deleteDonatedFoodAPI=async ({id,email})=>{
    const response=await axiosSecure.delete(`/foodCollection/${id}?email=${email}`)
    return response.data
  }
  return {
    addFoodAPI,
    allFeaturedFoodsAPI,
    allAvailableFoodsAPI,
    requestFoodAPI,
    donarFoodAPI,
    requestedFoodsByUserAPI,
    updateDonatedFoodAPI,
    deleteDonatedFoodAPI
  };
};

export default useAllFetchApi;
