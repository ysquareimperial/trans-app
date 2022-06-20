import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row } from "reactstrap";
import "../Styles.css";
import { Navigate, useNavigate } from "react-router-dom";
import img from "../Images/car.svg";
export default function Login() {
  const navigate = useNavigate();
  let _form = {
    phone: "",
    password: "",
  };

  const [loginForm, setLoginForm] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(loginForm);
  };
  return (
    <div className="login-body">
      <div className="container">
        <Row className="login-row">
          {/* <Col md={1}></Col> */}
          <Col className="bgg" md={6}>
            <div>
              <h1 className="login-title">trans app</h1>
              <h4 className="bkd">The Transit Your Can Trust...</h4>
              <p className="login-p">
                ...manages and tracks records of both driver(s) and passengers
              </p>
              <button
                className="login-btn shadow"
                onClick={() => navigate("/register")}
              >
                Register Here
              </button>
            </div>
          </Col>
          <Col md={6}>
            <Card className="px-5 py-5 login-card shadow-sm">
              <h1 className="login">Login</h1>
              <input
                type="num"
                name="phone"
                value={loginForm.phone}
                onChange={handleChange}
                className="login-input"
                placeholder="phone"
              />
              <input
                type="password"
                value={loginForm.password}
                name="password"
                onChange={handleChange}
                className="login-input"
                placeholder="password"
              />

              <Row>
                <Col md={6}>
                  <label
                    className="mt-3"
                    style={{ fontSize: 12, float: "left"}}
                  >
                    <input type="checkbox" /> Remember Password
                  </label>
                </Col>
                <Col md={6}>
                  <p
                    className="login-p1 text-center mt-3"
                    style={{
                      fontSize: 12,
                      float: "right",
                      cursor: "pointer"
                    }}
                  >
                    Forgot password?
                  </p>
                </Col>
              </Row>
              <button
                className="login-btn mt-3"
                onClick={() => {
                  handleSubmit();
                  navigate("/request-ride");
                }}
              >
                Login
              </button>
              <p
                className="login-p1 text-center mt-3"
                style={{ fontSize: 12 }}
              >
                Don't have an account? |{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/register")}
                >
                  register here!
                </span>
              </p>
            </Card>
          </Col>
          {/* <Col md={1}></Col> */}
        </Row>
      </div>
    </div>
  );
}
