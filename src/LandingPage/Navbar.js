import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";

import "./Navbar.css";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="nav-bar">
        <Row className="navbar-row">
          <Col md={2} className="nav-items">
            {/* <img src={logo} alt="sRecord" className="ln-logo" /> */}
            <ul className="nav-list">
              <a href="#features">
                <li className="l">TransApp</li>
              </a>
              </ul>
          </Col>
          <Col md={7} className="nav-items">
            <ul className="nav-list">
              <a href="#features">
                <li className="l">Features</li>
              </a>
            
              <a href="#subscribe">
                <li className="l">Subscribe</li>
              </a>
              <a href="#contact">
                <li className="l">Contact</li>
              </a>
            </ul>
          </Col>
          <Col md={3} className="div">
            <button
              className="signin-btn shadow"
              onClick={() => navigate("/login")}
              style={{ float: "right", marginRight: 30 }}
            >
              Sign In
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
