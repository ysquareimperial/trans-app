import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Sidebar from "../AdminDashboard/Sidebar";
// import '../Dashboard/Dashboard.css'
export default function AppIndex() {
  return (
    <div className="home-container">
      {/* <Row className="navbar m-0 p-0">
        <Col lg={12} md={12} sm={12} xs={12}>
          <Navbar/>
        </Col>
      </Row> */}
      <Row className="sidebar-row">
        <Col lg={2} md={2} className="sidebar">
          <Sidebar />
        </Col>
        <Col lg={10} md={10} sm={12} xs={12} className="index-container">
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}
