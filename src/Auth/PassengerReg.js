import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import ModalAlert from '../Modal'

export default function PassengerReg() {
  const navigate = useNavigate();
  let _form = {
    fullName: "",
    phone: "",
    nin: "",
    address: "",
    password: "",
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleModal = () => setModalIsOpen((p) => !p);
  const [passengerReg, setPassengerReg] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setPassengerReg((prev) => ({ ...prev, [name]: value }));
  };

 
  const handleSubmit = () => {
    // e.preventDefault();
    //setLoading(true);
    fetch('http://192.168.43.150:34567/PassengerReg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(passengerReg),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // setLoading(false);
        console.log(data);
        navigate("/request-Ride")
        // setModalIsOpen(true);
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  }

  return (
    <div className="p-reg">
      <input
        type="text"
        className="login-input"
        placeholder="Full Name"
        name="fullName"
        value={passengerReg.fullName}
        onChange={handleChange}
      />
      <Row>
        <Col md={6}>
          <input
            type="Phone"
            className="login-input"
            placeholder="Phone"
            name="phone"
            value={passengerReg.phone}
            onChange={handleChange}
          />
        </Col>
        <Col md={6}>
          <input
            type="num"
            className="login-input"
            placeholder="NIN"
            name="nin"
            value={passengerReg.nin}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <input
        type="Address"
        className="login-input"
        placeholder="Address"
        name="address"
        value={passengerReg.address}
        onChange={handleChange}
      />
      <input
        type="password"
        className="login-input"
        placeholder="password"
        name="password"
        value={passengerReg.password}
        onChange={handleChange}
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
          {/* <p className="text-center mt-3" style={{ fontSize: 12, float:'right', cursor:'pointer' }}>
                    Forgot password?
                  </p> */}
        </Col>
      </Row>
      <button className="login-btn mt-3" onClick={()=>navigate('/request-ride')}>
        Register
      </button>
      <p className="text-center mt-3" style={{ fontSize: 12, color:'white' }}>
        Already have an account? |{" "}
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
          login here!
        </span>
      </p>
      <ModalAlert isOpen={modalIsOpen} toggle={toggleModal} />
    </div>
  );
}
