import axios from "axios";

const AllFetchApi = () => {
  const baseUrl = import.meta.env.VITE_URL;
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

  const singleFoodAPI=async (id)=>{
    const response=await axios.get(`${baseUrl}/foodDetails/${id}`);
    return response.data;
  }

  return { addFoodAPI, allFeaturedFoodsAPI, allAvailableFoodsAPI,singleFoodAPI };
};

export default AllFetchApi;
