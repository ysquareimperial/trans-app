import React from "react";
import { useRoutes } from "react-router-dom";
import AdminHome from "../AdminDashboard/AdminHome";
import AllUsers from "../AdminDashboard/AllUsers";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AppIndex from "./AppIndex";
import PublishRide from "../Auth/publishRide";
import LandingPage from "../LandingPage/LandingPage";
import PassengerHome from "../PassengerDashboard/PassengerHome";
import RequestRide from "../PassengerDashboard/RequestRide";
import SuccessPayment from "../PassengerDashboard/SuccessPayment";
import ViewReservations from "../PassengerDashboard/ViewReservations";
import TripHisory from "../PassengerDashboard/TripHistory";

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
          path: "/request-ride/payment-successful",
          element: <SuccessPayment />,
        },
        {
          path: "/view-reservations",
          element: <ViewReservations />,
        },
        {
          path: "/trip-history",
          element: <TripHisory />,
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
