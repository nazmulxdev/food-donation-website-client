import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequesrt/MyFoodRequest";
import FoodDetails from "../Pages/AvailableFoods/FoodDetails";
import LoadingSpinner from "../Components/LoadingSpinner";
import { singleFoodAPI } from "../AllApi/singleFoodApiFetch";
import UpdateDonatedFood from "../Pages/ManageMyFoods/UpdateDonatedFood";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/availableFoods",
        Component: AvailableFoods,
      },
      {
        path: "/foodDetails/:id",
        loader: ({ params }) => {
          return singleFoodAPI(params.id);
        },
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageMyFoods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateDonatedFood/:id",
        loader: ({ params }) => {
          return singleFoodAPI(params.id);
        },
        element: (
          <PrivateRoute>
            <UpdateDonatedFood></UpdateDonatedFood>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/myFoodRequests",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    Component: LogIn,
  },
  {
    path: "/register",
    Component: Register,
  },
]);

export default Router;
