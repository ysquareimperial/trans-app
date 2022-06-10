import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row } from "reactstrap";
import "../Styles.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  //   const navigate = useNavigate();
  return (
    <div className="login-body">
      <div className="container">
        <Row className="login-row">
          {/* <Col md={1}></Col> */}
          <Col md={6}>
            <h1 className="login-title">Trans App</h1>
            <h4 className="bkd">The Transit Your Can Trust...</h4>
            <p className="login-p">
              ...manages and tracks records of both driver(S) and passengers
            </p>
            <button className="login-btn">Get Started</button>
          </Col>
          <Col md={6}>
            <Card className="px-5 py-5 login-card">
              <h1 className="login">Login</h1>
              <input type="num" className="login-input" placeholder="phone" />
              <input
                type="password"
                className="login-input"
                placeholder="password"
              />
              {/* <p style={{ margin: 0, marginTop: 30, fontSize: 12 }}>
                Login as:
              </p> */}
              {/* <div className="login-as">
                    <label>
                    <p style={{ fontSize: 18, display: "inline" }}>Passenger</p>{" "}
                    {""}
                    <input type="radio" />
                    </label>
                    <label>
                    <p style={{ fontSize: 18, display: "inline" }}>Driver</p> {""}
                    <input type="radio" />
                    </label>{" "}
                </div> */}
              <Row>
                <Col md={6}>
                  <label className="mt-3" style={{ fontSize: 12 }}>
                    <input type="checkbox" /> Remember Password
                  </label>
                </Col>
                <Col md={6}>
                  <p className="text-center mt-3" style={{ fontSize: 12, float:'right', cursor:'pointer' }}>
                    Forgot password?
                  </p>
                </Col>
              </Row>
              <button className="login-btn mt-3">Login</button>
              <p className="text-center mt-3" style={{ fontSize: 12 }}>
                Don't have an account? | <span style={{cursor:'pointer'}}>register here!</span>
              </p>
            </Card>
          </Col>
          {/* <Col md={1}></Col> */}
        </Row>
      </div>
    </div>
  );
}
