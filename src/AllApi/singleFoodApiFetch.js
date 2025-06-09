import axios from "axios";
const baseUrl = import.meta.env.VITE_URL;
export const singleFoodAPI = async (id) => {
  const response = await axios.get(`${baseUrl}/foodDetails/${id}`);
  return response.data;
};
