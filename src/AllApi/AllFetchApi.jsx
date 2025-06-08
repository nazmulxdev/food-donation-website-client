import axios from "axios";

const AllFetchApi = () => {
  const baseUrl = import.meta.env.VITE_URL;

  const addFoodAPI = async (foodData) => {
    const response = await axios.post(`${baseUrl}/foodCollection`, foodData);
    return response.data;
  };

  const allFeaturedFoodsAPI = async () => {
    const response = await axios.get(`${baseUrl}/featureFoods`);
    return response.data;
  };

  return { addFoodAPI, allFeaturedFoodsAPI };
};

export default AllFetchApi;
