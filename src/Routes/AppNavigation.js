import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
// import AdminHome from "../AdminDashboard/AdminHome";
import AllUsers from "../AdminDashboard/AllUsers";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AppIndex from "./AppIndex";
import LandingPage from "../LandingPage/LandingPage";
import PassengerHome from "../PassengerDashboard/PassengerHome";
import RequestRide from "../PassengerDashboard/RequestRide";
import SuccessPayment from "../PassengerDashboard/SuccessPayment";
import ViewReservations from "../PassengerDashboard/ViewReservations";
import TripHisory from "../PassengerDashboard/TripHistory";
import ViewHistory from "../PassengerDashboard/ViewHistory";
import Overview from "../PassengerDashboard/Overview";
import DriverOverview from "../DriverDashboard/DriverOverview";
import NewRideRequest from "../PassengerDashboard/NewRideRequest";
import AvailableCars from "../PassengerDashboard/AvailableCars";
import Profile from "../PassengerDashboard/Profile";
import RegisterCar from "../DriverDashboard/RegisterCar";
import CreateTrip from "../DriverDashboard/CreateTrip";
import ViewPassengers from "../DriverDashboard/ViewPassengers";
import Cars from "../DriverDashboard/Cars";
import Trips from "../DriverDashboard/Trips";
import { initUser } from "../redux/action/auth";
import {useDispatch} from 'react-redux'

function AppNavigation() {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initUser(() => {
      navigate("/driver");
    }, () => {
      navigate("/overview");
    }, () => {
      // navigate("/login");
    }))
  }, [])

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
          path: "/overview",
          element: <Overview />,
        },
        {
          path: "/new-ride-request",
          element: <NewRideRequest />,
        },
        {
          path: "/available-cars",
          element: <AvailableCars />,
        },
        {
          path: "/trip-history",
          element: <TripHisory />,
        },
        {
          path: "/view-history",
          element: <ViewHistory />,
        },
        { path: "/profile", element: <Profile /> },
        { path: "/driver", element: <DriverOverview /> },
        { path: "/cars", element: <Cars /> },
        { path: "/cars/register-your-car", element: <RegisterCar /> },
        { path: "/trips", element: <Trips /> },
        { path: "/trips/create-trip", element: <CreateTrip /> },
        { path: "/view-passengers", element: <ViewPassengers /> },
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
    {
      path: "/request-Ride",
      element: <RequestRide />,
    },
  ]);
  return element;
}
export default AppNavigation;
