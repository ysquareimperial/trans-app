import React from "react";
import { Col, Row } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { Clock, PlusCircle, Eye, AlignJustify } from "react-feather";
import "./Sidebar.css";
// import { Home } from "react-feather";
export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div style={{ position: "fixed" }}>
      <ul className="sidebar-items" style={{ marginTop: 70 }}>
        <li>
          <AlignJustify className="sidebar-icon" /> Overview
        </li>
        <li
          onClick={() => navigate("/request-ride")}
          className={`active1 ${
            location.pathname === "" && "active_sidebar"
          }`}
        >
          {" "}
          <PlusCircle className="sidebar-icon" />
          Request a ride
        </li>
        {/* <hr></hr> */}
        {/* <li onClick={() => navigate("/all-users")}>Manage All Users</li> */}
        <li onClick={() => navigate("/all-users")}>
          <Eye className="sidebar-icon" /> View reservations
        </li>
        <li onClick={() => navigate("/all-users")}>
          <Clock className="sidebar-icon" />
          Trip history
        </li>
      </ul>
      <div className="brand"></div>
    </div>
  );
}
