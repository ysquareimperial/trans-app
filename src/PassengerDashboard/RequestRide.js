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
  let requestRideForm = {
    trip_from: "",
    trip_to: "",
    date: "",
    time: "",
    numberOfSeat: "",
    nextOfKinPhone: "",
  };
  const [requestForm, setRequestForm] = useState(requestRideForm);
  const handleChange = ({ target: { name, value } }) => {
    setRequestForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    console.log(requestForm);
    fetch("http://127.0.0.1:34567/requestride", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestForm),
    })
    .then((resp) => resp.json())
    .then((data) => {
      // setLoading(false);
      console.log(data);
      // navigate("/request-Ride");
      // setModalIsOpen(true);
    })
    .catch((err) => {
      // setLoading(false);
      console.log(err);
    });
  };
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
                <Col md={6}>
                  <p
                    style={{
                      margin: 0,
                      padding: 0,
                      fontWeight: "bold",
                      color: "grey",
                      float: "right",
                    }}
                    className="p-1"
                  >
                    Price: ₦ 4,000
                  </p>
                </Col>
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
                      name='trip_from'
                      value={requestForm.trip_from}
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
                      name='trip_to'
                      value={requestForm.trip_to}
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
                      name='date'
                      value={requestForm.date}
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
                      name='time'
                      value={requestForm.time}
                      onChange={handleChange}
                    />
                    <label for="Time" className="form-label">
                      Time
                    </label>
                  </div>
                </Col>
              </Row>
              <Row className="p-3">
                <Col md={6}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Number of seats"
                      id="Number of seats"
                      name='numberOfSeat'
                      value={requestForm.numberOfSeat}
                      onChange={handleChange}
                    />
                    <label for="Number of seats" className="form-label">
                      Number of seats
                    </label>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Next of kin's phone"
                      id="Next of kin's phone"
                      name='nextOfKinPhone'
                      value={requestForm.nextOfKinPhone}
                      onChange={handleChange}
                    />
                    <label for="Next of kin's phone" className="form-label">
                      Next of kin's phone
                    </label>
                  </div>
                </Col>
              </Row>
              <Row className="m-1">
                <div style={{ marginTop: "" }}>
                  <button className="request mb-3" onClick={toggle1}>
                    Request
                  </button>
                </div>
              </Row>
            </Card>
          </Col>
          <Col md={4}>
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
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  fontWeight: "bold",
                  color: "grey",
                }}
                className="p-1"
              >
                Driver Details
              </p>
              <hr style={{ margin: 0 }}></hr>
              <Row className="p-2">
                <Col md={3}>
                  <img src={ysquare} className="driver" />
                </Col>
                <Col md={9}>
                  <p className="car-name" style={{ color: "grey" }}>
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Full Name:{" "}
                    </span>
                    Musa Isah
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Age:{" "}
                    </span>
                    35
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Phone:{" "}
                    </span>
                    +234 090 1866 1696
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Address:{" "}
                    </span>
                    Sabon Gari, Kano.
                  </p>
                </Col>
              </Row>
            </Card>
            <Card
              className="req-card shadow-sm mt-3"
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
                Car Details
              </p>
              <hr style={{ margin: 0 }}></hr>

              <Row className="p-2">
                <Col md={3}>
                  <img src={car} className="car" />
                </Col>
                <Col md={9}>
                  <p className="car-name" style={{ color: "grey" }}>
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Car Name:{" "}
                    </span>
                    Toyota Camry
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Model:{" "}
                    </span>
                    2020
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Color:{" "}
                    </span>
                    White
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Year:{" "}
                    </span>
                    1
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Total Seats:{" "}
                    </span>
                    4
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Reserved Seats:{" "}
                    </span>
                    2
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Available Seats:{" "}
                    </span>
                    2
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      License Plate:{" "}
                    </span>
                    NSR-12-122
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      License Plate:{" "}
                    </span>
                    2020 23 2 3
                  </p>
                </Col>
              </Row>
            </Card>
            <Card
              className="req-card shadow-sm mt-3"
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
                Payment Method
              </p>
              <hr style={{ margin: 0 }}></hr>

              <Row className="p-2">
                <Col md={3}>
                  <img src={atm} className="atm" />
                </Col>
                <Col md={9}>
                  {/* <img src={visa} className='visa'/> */}
                  <p
                    className="car-name"
                    style={{
                      fontWeight: "normal",
                      fontSize: 13,
                      color: "grey",
                      display: "inline",
                    }}
                  >
                    <span style={{ fontWeight: "normal", fontSize: 13 }}></span>
                    Master - <img src={master} />
                  </p>
                  <p
                    className="car-name"
                    style={{
                      fontWeight: "normal",
                      fontSize: 13,
                      color: "grey",
                      display: "inline",
                    }}
                  >
                    <span style={{ fontWeight: "normal", fontSize: 13 }}></span>
                    Visa -{" "}
                  </p>
                  <img src={visa} className="visa" />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        {/* <Dropdown isOpen={open1} toggle={toggle1}>
          <DropdownToggle data-toggle="dropdown" tag="span" onClick={toggle1}>
            Custom Dropdown Content
          </DropdownToggle>
          <DropdownMenu>
            <div>Custom dropdown item</div>
            <div>Custom dropdown item</div>
            <div>Custom dropdown item</div>
            <div>Custom dropdown item</div>
          </DropdownMenu>
        </Dropdown> */}
      </Card>

      <Modal size="" isOpen={open1} toggle={toggle1} className="avail-cars">
        <ModalBody className="modal-body">
          <Row className="">
            <Col md={6}>
              {/* <hr style={{margin:0, padding:0}}></hr> */}
              <p className="avail">Payment</p>
            </Col>
            <Col md={6}>
              {/* <p style={{ float: "right" }} className="avail">
                Total: <span> ₦ 4,000</span>
              </p> */}
            </Col>
          </Row>
          <Row className="">
            <Col md={12}>
              <img src={atm} className="modal-atm" />
              <p style={{ display: "inline", fontSize: 13 }}>
                {" "}
                Provide the information below with either:{" "}
              </p>
              <img src={master} />
              <img src={visa} className="visa" />
            </Col>
          </Row>
          <Row className="" style={{ marginTop: 25 }}>
            <p style={{ float: "right", fontSize: 25 }} className="avail">
              Total: <span> ₦ 4,000</span>
            </p>
            <Col md={12}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="card name"
                  id="card name"
                />
                <label for="card name" class="form-label">
                  Card Name
                </label>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder=" Card Number"
                  id=" Card Number"
                />
                <label for=" Card Number" class="form-label">
                  Card Number
                </label>
              </div>
            </Col>
          </Row>
          {/* <div>
            <select name="cars" className="sel">
              <option value="volvo">0/0</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div> */}
          <Row className="">
            <Col md={4}>
              <div class="form-group">
                <div>
                  <select name="cars" className="sel">
                    <option value="volvo">00</option>
                    <option value="volvo">01</option>
                    <option value="volvo">02</option>
                    <option value="volvo">03</option>
                    <option value="volvo">04</option>
                    <option value="volvo">05</option>
                    <option value="volvo">06</option>
                    <option value="volvo">07</option>
                    <option value="volvo">08</option>
                    <option value="volvo">09</option>
                    <option value="volvo">10</option>
                    <option value="volvo">11</option>
                    <option value="volvo">12</option>
                  </select>
                </div>
                {/* <label for="month" className="form-label">
                  Month
                </label> */}
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="year"
                  id="year"
                />
                <label for="year" className="form-label">
                  Year
                </label>
              </div>
            </Col>
            <Col md={4}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="cvv"
                  id="cvv"
                />
                <label for="cvv" className="form-label">
                  CVV
                </label>
              </div>
            </Col>
            <Col md={4}></Col>
          </Row>
          <p style={{ fontSize: 13 }}>
            <img src={protect} /> Your payment information is safe with us
          </p>
          <button
            className="request2"
            onClick={() => {
              toggle1();
              navigate("payment-successful");
              handleSubmit();
            }}
          >
            Pay/Reserve
          </button>
        </ModalBody>
      </Modal>
      <Modal size="" isOpen={open2} toggle={toggle2} className="avail-cars">
        <ModalBody className="modal-body"></ModalBody>
      </Modal>
    </div>
  );
}

export default RequestRide;
