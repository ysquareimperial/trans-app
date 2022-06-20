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
import driver from "../Images/driver.jpg";
import car from "../Images/toyota.png";
function RequestRide() {
  return (
    <div>
      {/* <Row>
        <Row>
          <Row>
            <Col md={6} className="mb-2">
              Inter City <Input type="checkbox" className="cool" />
            </Col>
            <Col md={6} className="mb-2">
              Oustside City <Input type="checkbox" className="cool" />
            </Col>
          </Row>
          <Col md={6} className="mb-2">
            From: <Input type="text" className="login-input" />
          </Col>
          <Col md={6} className="mb-2">
            To: <Input type="text" className="login-input" />
          </Col>
          <Col md={6} className="mb-2">
            pany <Input type="checkbox" className="cool" />
          </Col>
          <Col md={6} className="mb-2">
            Alone <Input type="checkbox" className="cool" />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-2">
            Number of Addult
            <Input type="number" className="login-input" />
          </Col>
          <Col md={6} className="mb-2">
            Number of Children <Input type="number" className="login-input" />
          </Col>
          <Col md={6} className="mb-2">
            Number of Infant
            <Input type="number" className="login-input" />
          </Col>
          <div>
            .......................................................................................................................................
          </div>
        </Row>
        <Row>
          <Col md={6} className="mb-2">
            check-in date
            <Input type="date" className="login-input" />
          </Col>
          <Col md={6} className="mb-2">
            check-out
            <Input type="date" className="login-input" />
          </Col>
        </Row>

        <Row>
          <Col md={6} className="mb-2">
            Return Date
            <Input type="date" className="login-input" />
          </Col>

          <Col md={6} className="mb-2">
            Return Time
            <Input type="time" className="login-input" />
          </Col>
        </Row>

        <Row>
          <Col md={6} className="mb-2">
            Will you be bringng Pets <Input type="checkbox" className="cool" />
            <Col>
              How many? <Input type="text" className="login-input" />
            </Col>
          </Col>

          <Col md={6} className="mb-2">
            Daily Routine
            <Input className="select" type="select" placeholder="">
              <option>--select--</option>
              <option>
                <Input type="checkbox">Monday </Input>
              </option>
              <option>--select--</option>
              <option>--select--</option>
              <option>--select--</option>
              <option>--select--</option>
              <option>--select--</option>
            </Input>
          </Col>
          <Row>
            <Col>Taxi for selected days</Col>
            <Col>
              Car <Input type="checkbox" className="cool" />
            </Col>
            <Col>
              Bus <Input type="checkbox" className="cool" />
            </Col>
            <Col>
              Luxirous <Input type="checkbox" className="cool" />
            </Col>
          </Row>
        </Row>
      </Row> */}
      {/* <center>
        <Button
          className="mt-2"
          style={{
            backgroundColor: "blue",
            marginTop: "250px",
            border: "none",
            width: "40%",
          }}
        >
          Apply
        </Button>
      </center> */}
      <Card
        className="request-card shadow p-3"
        style={{ marginTop: 70, border: "none" }}
      >
        <Row>
          <Col md={8}>
            <Card className="shadow-sm" style={{ border: "none" }}>
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
              <Row className="p-3">
                <Col md={6}>
                  <input className="request-field" type="text" name="from" />
                </Col>
                <Col md={6}>
                  <input className="request-field" type="text" name="from" />
                </Col>
              </Row>
              <Row className="m-1">
                <Col md={6}>
                  <input className="request-field" type="date" name="from" />
                </Col>
                <Col md={6}>
                  <input className="request-field" type="time" name="from" />
                </Col>
              </Row>
              <Row className="p-3">
                <Col md={6}>
                  <input
                    className="request-field"
                    type="text"
                    name="from"
                    placeholder="Number of seats"
                  />
                </Col>
                <Col md={6}>
                  <input
                    className="request-field"
                    type="num"
                    placeholder="Next of kin's phone"
                  />
                </Col>
              </Row>
              <Row className="m-1">
                <Col md={6}>
                  <input
                    className="request-field"
                    type="text"
                    placeholder="Current address"
                  />
                </Col>
                <Col md={6}>
                  <input
                    className="request-field"
                    type="text"
                    name="from"
                    placeholder="Destination address"
                  />
                </Col>
                <div style={{ marginTop: 10}}>
                  <button className="request">Request</button>
                </div>
              </Row>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm" style={{ border: "none" }}>
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
                  <img src={driver} className="driver" />
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
            <Card className="shadow-sm mt-3" style={{ border: "none" }}>
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
