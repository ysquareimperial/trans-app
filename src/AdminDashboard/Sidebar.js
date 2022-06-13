import React from "react";
import { Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { Home } from "react-feather";
export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div style={{ position: "fixed" }}>
      <ul className="sidebar-items">
        <li onClick={() => navigate("/admin-home")}> Home</li>
        {/* <hr></hr> */}
        <li onClick={() => navigate("/all-users")}>Manage All Users</li>
      </ul>
      <div className="brand"></div>
    </div>
  );
}
