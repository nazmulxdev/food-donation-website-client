import { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import axios from "axios";
import { sweetError } from "../Utilities/alert";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

const useAxiosSecure = () => {
  const { currentUser, logOutUser } = useContext(AuthContext);

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (currentUser?.accessToken) {
          config.headers.authorization = `Bearer ${currentUser.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          try {
            await logOutUser();
            sweetError("Session expired. Please log in again.");
          } catch (error) {
            sweetError(error);
          }
        }
        return Promise.reject(error);
      },
    );
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [currentUser, logOutUser]);

  return axiosInstance;
};

export default useAxiosSecure;
