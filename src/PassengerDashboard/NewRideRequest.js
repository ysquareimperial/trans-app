import React, { useState } from "react";
import { Card, Row, Col, Modal, ModalBody } from "reactstrap";
import useQuery from "../hooks/useQuery";
import "./RequestRide.css";
import { useNavigate } from "react-router";
import toyota from "../Images/toyota.png";
import "../Auth/input.css";

function NewRideRequest() {
  const query = useQuery();
  const from = query.get("from");
  const to = query.get("to");
  const date = query.get("date");
  const time = query.get("time");
  let newRideRequestForm = {
    from,
    to,
    date,
    time,
  };
  const [rideRequestForm, setRideRequestForm] = useState(newRideRequestForm);
  const handleChange = ({ target: { name, value } }) => {
    setRideRequestForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    console.log(rideRequestForm);
  };
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
    },
  ];

  const navigate = useNavigate();
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => {
    setOpen1(!open1);
  };
  // const [open2, setOpen2] = useState(false);
  // const toggle2 = () => {
  //   setOpen2(!open2);
  // };

  return (
    <div>
      <Card
        className="request-card shadow p-3"
        style={{ marginTop: 78, border: "none" }}
      >
        <p
          style={{
            fontWeight: "bold",
            color: "grey",
          }}
        >
          Request a ride
        </p>
        <Row>
          <Col md={8}>
            <Card
              className="req-card shadow-sm"
              style={{
                border: 0,
                backgroundColor: "rgb(250, 250, 250)",
                borderRadius: 5,
              }}
            >
              {/* <hr style={{ margin: 0 }}></hr> */}
              <Row className="p-3 mt-3">
                <Col md={6}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="From"
                      id="from"
                      name="from"
                      value={rideRequestForm.from}
                      onChange={handleChange}
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
                      name="to"
                      value={rideRequestForm.to}
                      onChange={handleChange}
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
                      name="date"
                      value={rideRequestForm.date}
                      onChange={handleChange}
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
                      name="time"
                      value={rideRequestForm.time}
                      onChange={handleChange}
                    />
                    <label for="Time" className="form-label">
                      Time
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="m-1">
                <div style={{ marginTop: "" }}>
                  <button
                    className="request mb-3"
                    onClick={() => {
                      toggle1();
                      handleSubmit();
                    }}
                  >
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
                <img src={toyota} style={{ width: 110 }} alt="car" />
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
                  onClick={() =>
                    navigate(
                      `/request-ride?from=${rideRequestForm.from}&to=${rideRequestForm.to}&date=${rideRequestForm.date}&time=${rideRequestForm.time}`
                    )
                  }
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
