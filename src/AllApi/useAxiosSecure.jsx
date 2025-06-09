import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import axios from "axios";
import { sweetError } from "../Utilities/alert";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

const useAxiosSecure = () => {
  const { currentUser, logOutUser } = useContext(AuthContext);

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${currentUser.accessToken}`;
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error);
      if (error.status === 401 || error.status === 403) {
        logOutUser()
          .then(() => {
            sweetError("Please use a valid access token or log in");
          })
          .catch((error) => {
            sweetError(error.messages);
          });
      }
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default useAxiosSecure;
