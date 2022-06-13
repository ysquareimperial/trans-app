import React from "react";
import { Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div style={{ position: "fixed" }}>
      <Row className="">
        <Col>
          <ul className="sidebar-items">
            <li onClick={() => navigate("/admin-home")}>Home</li>
            <li onClick={() => navigate("/all-users")}>All Users</li>
          </ul>
        </Col>
      </Row>
      <div className="brand"></div>
    </div>
  );
}
