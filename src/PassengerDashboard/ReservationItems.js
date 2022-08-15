import React from "react";
import { Card, Row, Col, Modal, ModalBody } from "reactstrap";
import driverImg from "../Images/ysquareimperial.png";
import tripImg from "../Images/trip.png";
import carImg from "../Images/toyota.png";

function ReservationItems ({trip={}, driver={}, car={}}) {
    const item = trip
    //     {
    //       img: tripImg,
    //       from: item.trip_from,
    //       to: item.trip_to,
    //       numberOfSeat:item.numberOfSeat,
    //       nextofKinPhone:item.nextOfKinPhone,
    //       time: item.time,
    //       date: item.date,
    //       price: item.price,
    //       nextOfKinPhone:item.nextOfKinPhone,
    //     }
    //   const driver = 
    //     {
    //       img: driverImg,
    //       fullName:rider.fullName,
    //       age: rider.Age,
    //       phone:rider.phoneNo,
    //       address:rider.currentAddress,
    //     }
      
    //   const car =
    //     {
    //       img: carImg,
    //       name:vehicle.CarName,
    //       model:vehicle.Carmodel,
    //       color:vehicle.CarColor,
    //       year:vehicle.Caryear,
    //       licensePlate:vehicle.LicencePlate,
    //       // licenseNumber:ee.LicencePlate,
    //       // age: "40",
    //       // phone: "+234 09018661696",
    //       // address: "Sabon Gari, Kano.",
    //     }
      
    return(
        <Card className="reservation-card shadow-sm p-3 mb-3">
          {/* {JSON.stringify({car,driver,trip})} */}
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
                    {trip.Trip_from}{" "}
                    <span style={{ fontWeight: "normal" }}>to</span>{" "}
                    {trip.Trip_to}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Date:{" "}
                    </span>
                    {trip.date}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      time:{" "}
                    </span>
                    {trip.time}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Number of seat:{" "}
                    </span>
                    {trip.availableSeats}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Next of kin's phone:{" "}
                    </span>
                    {trip.nextOfKinPhone}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Price:{" "}
                    </span>
                    ₦ {trip.price}
                  </p>
                </Col>
              </Row>
            </Col>
         
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
                    {driver.fullName}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Age:{" "}
                    </span>
                    {driver.Age}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Phone:{" "}
                    </span>
                    {driver.phoneNo}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Address:{" "}
                    </span>
                    {driver.currentAddress}
                  </p>
                </Col>
              </Row>
            </Col>
         
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
                  <img src={car.img} className="car" />
                </Col>
                <Col md={9}>
                  <p className="car-name" style={{ color: "grey" }}>
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Car Name:{" "}
                    </span>
                    {car.carName}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Model:{" "}
                    </span>
                    {car.carModel}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Color:{" "}
                    </span>
                    {car.carColor}
                  </p>
                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      Year:{" "}
                    </span>
                    {car.carYear}
                  </p>

                  <p className="from-to">
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      License Plate:{" "}
                    </span>
                    {car.Platenumber}
                  </p>
                  
                </Col>
              </Row>
            </Col>
          
        </Row>
      </Card>
    )
}
export default ReservationItems;