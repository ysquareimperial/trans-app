import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import { driverLogin } from "../redux/action/auth";
import {useDispatch} from 'react-redux'

export default function DriverLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  let _form = {
    phone: "",
    password: "",
  };
  const [loginForm, setLoginForm] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // console.log(loginForm);
    dispatch(driverLogin(loginForm, data => {
      console.log(data)
      // alert(data.message)
      navigate("/driver");
    }, err => {
      console.log(err)
      alert(err.message)
    }))
  };
  return (
    <div>
      <Card className="px-5 py-5 login-card shadow-sm">
        <h1 className="login">Driver</h1>
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
              className="mt-3 login-p1"
              style={{ fontSize: 12, float: "left" }}
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
                cursor: "pointer",
              }}
            >
              Forgot password?
            </p>
          </Col>
        </Row>
        <button
          className="login-btn mt-3"
          onClick={handleSubmit}
        >
          Login
        </button>
        <p className="login-p1 text-center mt-3" style={{ fontSize: 12 }}>
          Don't have an account? |{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            register here!
          </span>
        </p>
      </Card>
    </div>
  );
}
