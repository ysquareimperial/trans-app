import React, { useState } from "react";
import { Card, Row, Col, Modal, ModalBody } from "reactstrap";
import "./RequestRide.css";
import ysquare from "../Images/ysquareimperial.png";
import protect from "../Images/protect.png";
import atm from "../Images/card.png";
import master from "../Images/master.png";
import { useNavigate } from "react-router";
import visa from "../Images/visa.png";
import car from "../Images/toyota.png";
import Goog from "../Auth/goog";
import "../Auth/input.css";

function RequestRide() {
  const navigate = useNavigate();
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = useState(false);
  const toggle2 = () => {
    setOpen2(!open2);
  };
  return (
    <div>
      <Row style={{ marginTop: 78, border: "none" }}>
        <Col md={3}></Col>
        <Col md={6}>
          <Card
            className="shadow-sm mt-3"
            style={{
              borderLeft: "1px solid rgb(200, 201, 202)",
              borderRadius: 0,
              borderRight: 0,
              borderTop: 0,
              borderBottom: 0,

              backgroundColor: "rgb(250, 250, 250)",
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <p
              style={{
                margin: 0,
                padding: 0,
                fontWeight: "bold",
                color: "grey",
              }}
              className="p-1"
            >
              Payment Alert
            </p>
            <hr style={{ margin: 0 }}></hr>
            <div className="p-3">
              <Row className="p-2">
                <Col md={2}>
                  <img src={atm} className="atm" />
                </Col>
                <Col md={10}>
                  <p style={{ fontSize: 13 }}>
                    You have successfully paid{" "}
                    <span style={{ fontWeight: "bold" }}>₦ 4,000</span> for your
                    trip from <span style={{ fontWeight: "bold" }}>Kano</span>{" "}
                    to <span style={{ fontWeight: "bold" }}>Abuja</span> on{" "}
                    <span style={{ fontWeight: "bold" }}>12/12/2022</span>
                  </p>
                </Col>
              </Row>
              <button className="request2 mt-3" onClick={()=>navigate('/view-reservations')}>View Reservation</button>
            </div>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}

export default RequestRide;
