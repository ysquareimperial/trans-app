import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import publishRide from "publishRide";
export default function DriverReg() {
  const navigate = useNavigate();
  let _form = {
    fullName: "",
    Age:"",
    phone: "",
    nin: "",
    licenseNo: "",
    licenseExpiry: "",
    address: "",
    password: "",
    account_type: 'driver'
  };

  const [driverReg, setDriverReg] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setDriverReg((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // e.preventDefault();
    //setLoading(true);
    fetch('http://127.0.0.1:34567/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(driverReg),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // setLoading(false);
        console.log(data);
        navigate("/driver")
        
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  };

  return (
    <div>
      <div className="p-reg">
        <input
          type="text"
          className="login-input"
          placeholder="Full Name"
          name="fullName"
          value={driverReg.fullName}
          onChange={handleChange}
        />
          <input
          type="text"
          className="login-input"
          placeholder="Age"
          name="Age"
          value={driverReg.Age}
          onChange={handleChange}
        />
        <Row>
          <Col md={6}>
            <input
              type="Phone"
              className="login-input"
              placeholder="Phone"
              name="phone"
              value={driverReg.phone}
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <input
              type="num"
              className="login-input"
              placeholder="NIN"
              name="nin"
              value={driverReg.nin}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <input
              type="num"
              name="licenseNo"
              value={driverReg.licenseNo}
              onChange={handleChange}
              className="login-input"
              placeholder="License Number"
            />
          </Col>
          <Col md={6}>
            <input
              type="month"
              className="login-input"
              placeholder="License Expiry Date"
              name="licenseExpiry"
              value={driverReg.licenseExpiry}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <input
          type="Address"
          className="login-input"
          placeholder="Address"
          name="address"
          value={driverReg.address}
          onChange={handleChange}
        />
        <input
          type="password"
          className="login-input"
          placeholder="password"
          name="password"
          value={driverReg.password}
          onChange={handleChange}
        />
        <Row>
          <Col md={6}>
            {/* <label className="mt-3" style={{ fontSize: 12 }}>
              <input type="checkbox" /> Remember Password
            </label> */}
          </Col>
          <Col md={6}>
            {/* <p className="text-center mt-3" style={{ fontSize: 12, float:'right', cursor:'pointer' }}>
                    Forgot password?
                  </p> */}
          </Col>
        </Row>
        <button
          className="login-btn mt-3"
          onClick={() => {
            handleSubmit();
            navigate("/driver");
          }}
        >
          Register
        </button>
        <p
          className="text-center mt-3"
          style={{ fontSize: 12, color: "white" }}
        >
          Already have an account? |{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            login here!
          </span>
        </p>
      </div>
    </div>
  );
}
