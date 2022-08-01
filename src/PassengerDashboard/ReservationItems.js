import React from "react";
import { Card, Row, Col, Modal, ModalBody } from "reactstrap";
import driverImg from "../Images/ysquareimperial.png";
import tripImg from "../Images/trip.png";
import carImg from "../Images/toyota.png";

function ReservationItems ({item={}}) {
    const trip = [
        {
          img: tripImg,
          from: item.trip_from,
          to: item.trip_to,
          numberOfSeat:item.numberOfSeat,
          nextofKinPhone:item.nextOfKinPhone,
          time: item.time,
          date: item.date,
          price: item.price,
          nextOfKinPhone:item.nextOfKinPhone,
        },
      ];
      const driver = [
        {
          img: driverImg,
          fullName:item.fullName,
          age: item.Age,
          phone:item.phoneNo,
          address:item.currentAddress,
        },
      ];
      const car = [
        {
          img: carImg,
          name:item.CarName,
          model:item.Carmodel,
          color:item.CarColor,
          year:item.Caryear,
          licensePlate:item.LicencePlate,
          // licenseNumber:ee.LicencePlate,
          // age: "40",
          // phone: "+234 09018661696",
          // address: "Sabon Gari, Kano.",
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
                    {item.trip_from}{" "}
                    <span style={{ fontWeight: "normal" }}>to</span>{" "}
                    {item.trip_to}
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
                    {item.Seat}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Next of kin's phone:{" "}
                    </span>
                    {item.nextOfKinPhone}
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
                    {item.phoneNo}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Address:{" "}
                    </span>
                    {item.currentAddress}
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
                    {item.carName}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Model:{" "}
                    </span>
                    {item.carModel}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Color:{" "}
                    </span>
                    {item.carColor}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Year:{" "}
                    </span>
                    {item.carYear}
                  </p>

                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      License Plate:{" "}
                    </span>
                    {item.Platenumber}
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