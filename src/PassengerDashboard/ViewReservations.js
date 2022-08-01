import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "reactstrap";
import carImg from "../Images/toyota.png";
import driverImg from "../Images/ysquareimperial.png";
import tripImg from "../Images/trip.png";
import "./ViewReservation.css";
import ReservationItems from "./ReservationItems"
import {useSelector} from "react-redux";

export default function ViewReservations({item={}}) {
  const uerInfo = useSelector(state => state.auth.user)

  const [reservations, setReservations] = useState([]);
  const [driverdetails, setDriverdetails] = useState([]);
  const [cardetails, setCardetails] = useState([]);
  
  const trip = [
    {
      img: tripImg,
      from:item.Trip_from,
      to: item.Trip_to,
      numberOfSeat:item.date,
      nextofKinPhone:item.nextofKinPhone,
      time:item.time,
      date:item.date,
      // price: "4,000",
    },
  ];
  const driver = [
    {
      img: driverImg,
      fullName:item.fullName,
      age:item.age,
      phoneNo:item.phoneNo,
      address:item.currentAddress,
    },
  ];
  const car = [
    {
      img: carImg,
      name:item.carName,
      model:item.carModel,
      color:item.carColor,
      year:item.carYear,
      licensePlate:item.Platenumber,
      // licenseNumber: "1212334134",
      // age: "40",
      // phone: "+234 09018661696",
      // address: "Sabon Gari, Kano.",
    },
  ]
  const get_requestride = () => {
    fetch("http://127.0.0.1:34567/get_requestride_user?user_id="+uerInfo.id)
      .then((raw) => raw.json())
      .then((data) => {
        if (data.results && data.results.length) {
          setReservations(data.results);
        //   setDriverdetails(data.results);
        //   setCardetails(data.results);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    get_requestride();
  }, []);

  const get_driver = () => {
    fetch("http://127.0.0.1:34567/get_driverregistration_user?user_id="+uerInfo.id)
      .then((raw) => raw.json())
      .then((data) => {
        if (data.results && data.results.length) {
          setDriverdetails(data.results);
        //   setDriverdetails(data.results);
        //   setCardetails(data.results);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    get_driver();
  }, []);

  const get_Cardetails = () => {
    fetch("http://127.0.0.1:34567/get_registercar_user?user_id="+uerInfo.id)
      .then((raw) => raw.json())
      .then((data) => {
        if (data.results && data.results.length) {
          setCardetails(data.results);
        //   setDriverdetails(data.results);
        //   setCardetails(data.results);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    get_Cardetails();
  }, []);
  return (
    <div>
      <div>
        <Card
          className="request-card shadow p-3"
          style={{ marginTop: 78, border: "none" }}
          >
          {JSON.stringify(reservations)}
          <p
            style={{
              fontWeight: "bold",
              color: "grey",
            }}
          >
            Reservations
          </p>
          
          {reservations.map((item, index) => (
           <ReservationItems ee={item} />
          ))}
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
                      <img alt='' src={item.img} className="" />
                    </Col>
                    <Col md={9}>
                      <p className="car-name" style={{ color: "grey" }}>
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          From:{" "}
                        </span>
                        {item.Trip_from}{" "}
                        <span style={{ fontWeight: "normal" }}>to</span>{" "}
                        {item.Trip_to}
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
                        {item.availableSeats}
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
                      <img alt='' src={item.img} className="driver" />
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
                      <img alt='' src={item.img} className="car" />
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
                      {/* <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          License No:{" "}
                        </span>
                        {item.licenseNumber}
                      </p> */}
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </Card>
        </Card>
      </div>
    </div>
  );
}
