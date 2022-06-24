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
import toyota from "../Images/toyota.png";
import Goog from "../Auth/goog";
import "../Auth/input.css";

function NewRideRequest() {
  let requestForm = {

  }
  const cars = [
    {
      carImage: toyota,
      carName: "Toyota Camry",
      from: "Kano",
      to: "Kaduna",
      time: "12:00 PM",
      date: "12/02/2022",
      seats: 1,
    },
    {
      carImage: toyota,
      carName: "Toyota Camry",
      from: "Kano",
      to: "Kaduna",
      time: "12:00 PM",
      date: "12/02/2022",
      seats: 1,
    }
  ];

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
      <Card
        className="request-card shadow p-3"
        style={{ marginTop: 78, border: "none" }}
      >
        <Row>
          <Col md={8}>
            <Card
              className="req-card shadow-sm"
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
              <Row>
                <Col md={6}>
                  <p
                    style={{
                      margin: 0,
                      padding: 0,
                      fontWeight: "bold",
                      color: "grey",
                    }}
                    className="p-1"
                  >
                    Request a ride
                  </p>
                </Col>
                <Col md={6}></Col>
              </Row>
              <hr style={{ margin: 0 }}></hr>
              <Row className="p-3 mt-3">
                <Col md={6}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="From"
                      id="from"
                    />
                    <label for="from" className="form-label">
                      From
                    </label>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="To"
                      id="To"
                    />
                    <label for="To" className="form-label">
                      To
                    </label>
                  </div>
                </Col>
              </Row>
              <Row className="m-1">
                <Col md={6}>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Date"
                      id="Date"
                    />
                    <label for="Date" className="form-label">
                      Date
                    </label>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <input
                      type="time"
                      className="form-control"
                      placeholder="Time"
                      id="Time"
                    />
                    <label for="Time" className="form-label">
                      Time
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="m-1">
                <div style={{ marginTop: "" }}>
                  <button className="request mb-3" onClick={toggle1}>
                    Search for ride
                  </button>
                </div>
              </Row>
            </Card>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Card>
      <Modal size="" isOpen={open1} toggle={toggle1} className="avail-cars">
        <ModalBody className="modal-body">
          <p className="avail">Available Cars</p>
          {cars.map((item, index) => (
            <Row className="mt-4">
              <Col md={3}>
                <img src={toyota} style={{ width: 110 }} />
              </Col>
              <Col md={6}>
                <p className="car-name">{item.carName}</p>
                <p className="from-to">
                  {item.from} to {item.to}
                </p>
                <p className="time">{item.time}</p>
                <p className="from-to">{item.date}</p>
                <p className="from-to">
                  Available seats:{" "}
                  <span style={{ fontWeight: "bold" }}>{item.seats}</span>
                </p>
              </Col>
              <Col md={3}>
                <button
                  className="request-btn"
                  onClick={()=>navigate('/request-ride')}
                >
                  Request
                </button>
              </Col>
              <hr className="mt-2"></hr>
            </Row>
          ))}
          <div className="mt-3">
            <button className="close" onClick={toggle1}>
              Close
            </button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default NewRideRequest;