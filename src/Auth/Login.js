import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row } from "reactstrap";
import "../Styles.css";
import { Navigate, useNavigate } from "react-router-dom";
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
          <Col md={6}>
            <h1 className="login-title">Trans App</h1>
            <h4 className="bkd">The Transit Your Can Trust...</h4>
            <p className="login-p">
              ...manages and tracks records of both driver(S) and passengers
            </p>
            <button className="login-btn" onClick={() => navigate("/register")}>
              Register Here
            </button>
          </Col>
          <Col md={6}>
            <Card className="px-5 py-5 login-card">
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
                  <p
                    className="text-center mt-3"
                    style={{ fontSize: 12, float: "right", cursor: "pointer" }}
                  >
                    Forgot password?
                  </p>
                </Col>
              </Row>
              <button className="login-btn mt-3" onClick={handleSubmit}>
                Login
              </button>
              <p className="text-center mt-3" style={{ fontSize: 12 }}>
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
