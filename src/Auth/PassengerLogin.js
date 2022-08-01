import React, { useState } from "react";
import useQuery from "../hooks/useQuery";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import { useDispatch } from 'react-redux'
import { passengerLogin } from "../redux/action/auth";

export default function PassengerLogin() {
  const query = useQuery();
  const gotoDashboard = query.get("rdr");
  const from = query.get("from");
  const to = query.get("to");
  const date = query.get("date");
  const time = query.get("time");
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
    dispatch(passengerLogin(loginForm, data => {
      console.log(data)
      // alert(data.message)
      if (!gotoDashboard) {
        navigate('/overview')
      } else {

        // navigate(`/request-ride?rdr=true&from=${searchForm.from}&to=${searchForm.to}&date=${searchForm.date}&time=${searchForm.time}`)
        navigate(`/request-ride?from=${from}&to=${to}&date=${date}&time=${time}`)
      }
    }, err => {
      console.log(err)
      alert(err.message)
    }))
  };
  return (
    <div>
      <Card className="px-5 py-5 login-card shadow-sm">
        <h1 className="login">Passenger</h1>
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
          onClick={() => {
            handleSubmit();

          }}
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
