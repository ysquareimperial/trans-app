import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
} from "reactstrap";
import "./RequestRide.css";
import ysquare from "../Images/ysquareimperial.png";
import car from "../Images/toyota.png";
import Goog from "./goog";
import "./input.css";
function RequestRide() {
  return (
    <div>
      <Card
        className="request-card shadow p-3"
        style={{ marginTop: 70, border: "none" }}
      >
        <Row>
          <Col md={8}>
            <Card
              className="shadow-sm"
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
                Request a ride
              </p>
              <hr style={{ margin: 0 }}></hr>
              <Row className="p-3 mt-3">
                <Col md={6}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="From"
                      id="from"
                    />
                    <label for="from" class="form-label">
                      From
                    </label>
                  </div>
                </Col>
                <Col md={6}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="To"
                      id="To"
                    />
                    <label for="To" class="form-label">
                      To
                    </label>
                  </div>
                </Col>
              </Row>
              <Row className="m-1">
                <Col md={6}>
                  <div class="form-group">
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Date"
                      id="Date"
                    />
                    <label for="Date" class="form-label">
                      Date
                    </label>
                  </div>
                </Col>
                <Col md={6}>
                  <div class="form-group">
                    <input
                      type="time"
                      class="form-control"
                      placeholder="Time"
                      id="Time"
                    />
                    <label for="Time" class="form-label">
                      Time
                    </label>
                  </div>
                </Col>
              </Row>
              <Row className="p-3">
                <Col md={6}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Number of seats"
                      id="Number of seats"
                    />
                    <label for="Number of seats" class="form-label">
                      Number of seats
                    </label>
                  </div>
                </Col>
                <Col md={6}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Next of kin's phone"
                      id="Next of kin's phone"
                    />
                    <label for="Next of kin's phone" class="form-label">
                      Next of kin's phone
                    </label>
                  </div>
                </Col>
              </Row>
              <Row className="m-1">
                <Col md={6}>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Current address"
                    id="Current address"
                  />
                  <label for="Current address" class="form-label">
                    Current address
                  </label>
                </Col>
                <Col md={6}>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Destination Address"
                    id="Destination Address"
                  />
                  <label for="Destination Address" class="form-label">
                    Destination Address
                  </label>
                </Col>
                <div style={{ marginTop: 10 }}>
                  <button className="request mb-3">Request</button>
                </div>
              </Row>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="shadow-sm"
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
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default RequestRide;
