import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Clock, PlusCircle, Eye, AlignJustify } from "react-feather";
import "./Sidebar.css";
// import { Home } from "react-feather";
export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div style={{ position: "fixed" }}>
      <ul className="sidebar-items" style={{ marginTop: 70 }}>
        <li
          onClick={() => navigate("/overview")}
          className={`active1 ${
            location.pathname === "/overview" && "active_sidebar"
          }`}
        >
          <AlignJustify className="sidebar-icon" /> Overview
        </li>
        <li
          onClick={() => navigate("/new-ride-request")}
          className={`active1 ${
            location.pathname.includes("request") && "active_sidebar"
          }`}
        >
          {" "}
          <PlusCircle className="sidebar-icon" />
          Request a ride
        </li>
        <li
          onClick={() => navigate("/view-reservations")}
          className={`active1 ${
            location.pathname === "/view-reservations" && "active_sidebar"
          }`}
        >
          {" "}
          <Eye className="sidebar-icon" /> View reservations
        </li>
        <li
          onClick={() => navigate("/trip-history")}
          className={`active1 ${
            location.pathname === "/trip-history" && "active_sidebar"
          }`}
        >
          {" "}
          <Clock className="sidebar-icon" />
          Trip history
        </li>
        <li
          onClick={() => navigate("/driver")}
          className={`active1 ${
            location.pathname === "/driver" && "active_sidebar"
          }`}
        >
          Overview
        </li>
        <li
          onClick={() => navigate("/cars")}
          className={`active1 ${
            location.pathname.includes("cars") && "active_sidebar"
          }`}
        >
          Cars
        </li>
        <li
          onClick={() => navigate("/trips")}
          className={`active1 ${
            location.pathname.includes ("trip") && "active_sidebar"
          }`}
        >
          Trips
        </li>
        <li
          onClick={() => navigate("/view-passengers")}
          className={`active1 ${
            location.pathname === "/view-passengers" && "active_sidebar"
          }`}
        >
          Passengers
        </li>
      </ul>
      <div className="brand"></div>
    </div>
  );
}
