import axios from "axios";

const AllFetchApi = () => {
  const baseUrl = import.meta.env.VITE_URL;

  const addFood = async (foodData) => {
    const response = await axios.post(`${baseUrl}/foodCollection`, foodData);
    return response.data;
  };

  const allFeaturedFoods = async () => {
    const response = await axios.get(`${baseUrl}/featureFoods`);
    return response.data;
  };

  return { addFood, allFeaturedFoods };
};

export default AllFetchApi;
