import React from "react";
import { Card, Row, Col, Modal, ModalBody } from "reactstrap";
import driverImg from "../Images/ysquareimperial.png";
import tripImg from "../Images/trip.png";
import carImg from "../Images/toyota.png";

function ReservationItems ({ee}) {
    const trip = [
        {
          img: tripImg,
          from:ee.trip_from,
          to: ee.trip_to,
          numberOfSeat:ee.numberOfSeat,
          nextofKinPhone:ee.nextOfKinPhone,
          time: ee.time,
          date: ee.date,
          price: "4,000",
        },
      ];
      const driver = [
        {
          img: driverImg,
          fullName: "Musa Musa",
          age: "40",
          phone: "+234 09018661696",
          address: "Sabon Gari, Kano.",
        },
      ];
      const car = [
        {
          img: carImg,
          name: "Toyota",
          model: "Camry",
          color: "white",
          year: 1,
          licensePlate: "NSR-3-2-4",
          licenseNumber: "1212334134",
          age: "40",
          phone: "+234 09018661696",
          address: "Sabon Gari, Kano.",
        },
      ];
    return(
        <Card className="reservation-card shadow-sm p-3 mb-3">
        <Row>
          <Col md={6}>
            <p
              style={{
                margin: 0,
                padding: 0,
                fontWeight: "bold",
                color: "grey",
              }}
            >
              Reservation Details
            </p>
          </Col>
          <Col md={6}>
            <div style={{ float: "right" }}>
              <button className="edit-res">Edit</button>
              <button className="del-res">Cancel Trip</button>
            </div>
          </Col>
        </Row>
        <Row>
          {trip.map((item, index) => (
            <Col md={4}>
              {/* {trip.map((item, index) => ()}} */}
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
                    Trip
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
                  ></p>
                </Col>
              </Row>
              <Row className="p-2">
                <Col md={3}>
                  <img src={item.img} className="" />
                </Col>
                <Col md={9}>
                  <p className="car-name" style={{ color: "grey" }}>
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      From:{" "}
                    </span>
                    {item.from}{" "}
                    <span style={{ fontWeight: "normal" }}>to</span>{" "}
                    {item.to}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Date:{" "}
                    </span>
                    {item.date}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      time:{" "}
                    </span>
                    {item.time}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Number of seat:{" "}
                    </span>
                    {item.numberOfSeat}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Next of kin's phone:{" "}
                    </span>
                    {item.nextofKinPhone}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Price:{" "}
                    </span>
                    ₦ {item.price}
                  </p>
                </Col>
              </Row>
            </Col>
          ))}
          {driver.map((item, index) => (
            <Col
              md={4}
              style={{ borderLeft: "1px solid rgb(200, 201, 202)" }}
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
                    Driver
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
                    {/* <Trash size='2em' style={{color:'rgb(222,222,222)'}} /> */}
                  </p>
                </Col>
              </Row>

              {/* <Row className="p-3 mt-3">
              <Col md={6}></Col>
              <Col md={6}></Col>
            </Row> */}
              <Row className="p-2">
                <Col md={3}>
                  <img src={item.img} className="driver" />
                </Col>
                <Col md={9}>
                  <p className="car-name" style={{ color: "grey" }}>
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Full Name:{" "}
                    </span>
                    {item.fullName}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Age:{" "}
                    </span>
                    {item.age}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Phone:{" "}
                    </span>
                    {item.phone}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Address:{" "}
                    </span>
                    {item.address}
                  </p>
                </Col>
              </Row>
            </Col>
          ))}
          {car.map((item, index) => (
            <Col
              md={4}
              style={{ borderLeft: "1px solid rgb(200, 201, 202)" }}
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
                    Car
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
                    {/* <Trash size='2em' style={{color:'rgb(222,222,222)'}} /> */}
                  </p>
                </Col>
              </Row>

              {/* <Row className="p-3 mt-3">
              <Col md={6}></Col>
              <Col md={6}></Col>
            </Row> */}
              <Row className="p-2">
                <Col md={3}>
                  <img src={item.img} className="car" />
                </Col>
                <Col md={9}>
                  <p className="car-name" style={{ color: "grey" }}>
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Car Name:{" "}
                    </span>
                    {item.name}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Model:{" "}
                    </span>
                    {item.model}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Color:{" "}
                    </span>
                    {item.color}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Year:{" "}
                    </span>
                    {item.year}
                  </p>

                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      License Plate:{" "}
                    </span>
                    {item.licensePlate}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      License No:{" "}
                    </span>
                    {item.licenseNumber}
                  </p>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Card>
    )
}
export default ReservationItems;