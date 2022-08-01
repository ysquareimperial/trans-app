import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row } from "reactstrap";
import "../Styles.css";
import { useNavigate } from "react-router-dom";
import PassengerLogin from "./PassengerLogin";
import DriverLogin from "./DriverLogin";
export default function Login() {
  const navigate = useNavigate();
  let _form = {
   phoneNo: "",
    password: "",
  };

  const [loginForm, setLoginForm] = useState(_form);
  const [loading, setLoading] = useState(false)
  const handleChange = ({ target: { name, value } }) => {
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    setLoading(true);
    // login(
    //   { email: loginForm.email, password: loginForm.password },
    //   (data) => {
    //     console.log(data);
    //     if (data && data.success) {
    //       setLoading(false);
    //       alert("Successfully Saved");
    //       Navigate("/app/dashbord");
    //     } else {
    //       if (data) {
    //         alert(JSON.stringify(Object.values(data)[0]));
    //         setLoading(false);
    //       } else {
    //         setLoading(false);
    //         alert("An error occured!");
    //       }
    //     }
    //   },
    //   (err) => {
    //     alert(JSON.stringify(Object.values(err)[0]) || "error occured");
    //     setLoading(false);
    //     console.log("err", err);
    //   }
    // )
  };

  const [select, setSelect] = useState(2);
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
            
               
            <div className="loginas-btn">
              <button
                className={select === 2 ? "role-btn" : "role-btn-active "}
                onClick={() => setSelect(2)}
                style={{ borderTopLeftRadius: 10 }}
              >
                Passenger
              </button>
              <button
                className={select === 3 ? "role-btn" : "role-btn-active  "}
                onClick={() => setSelect(3)}
                style={{ borderTopRightRadius: 10 }}
              >
                Driver
              </button>
            </div>
            {select === 2 ? <PassengerLogin /> : <DriverLogin />}
         
          </Col>
        </Row>
         
      </div>
    </div>
  );
}
