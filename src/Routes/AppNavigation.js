import React from "react";
import { useRoutes } from "react-router-dom";
import AdminHome from "../AdminDashboard/AdminHome";
import AllUsers from "../AdminDashboard/AllUsers";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AppIndex from "./AppIndex";
import PublishRide from "../Auth/publishRide";
import RequestRide from "../Auth/RequestRide";
import LandingPage from "../LandingPage/LandingPage";
import PassengerHome from "../PassengerDashboard/PassengerHome";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <PassengerHome /> },
        {
          path: "/request-ride",
          element: <RequestRide />,
        },
        {
          path: "/all-users",
          element: <AllUsers />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    ,
    {
      path: "/pushlish-ride",
      element: <PublishRide />,
    },
    {
      path: "/request-Ride",
      element: <RequestRide />,
    },
  ]);
  return element;
}
export default AppNavigation;
