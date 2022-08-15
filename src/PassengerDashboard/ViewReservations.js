import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "reactstrap";
import carImg from "../Images/toyota.png";
import driverImg from "../Images/ysquareimperial.png";
import tripImg from "../Images/trip.png";
import "./ViewReservation.css";
import ReservationItems from "./ReservationItems"
import {useSelector} from "react-redux";

export default function ViewReservations({item={}}) {
  const user = useSelector(state => state.auth.user)

  const [Trips, setTrips] = useState([]);
  const [driverdetails, setDriverdetails] = useState([]);
  const [cardetails, setCardetails] = useState([]);
  const reservations = []
  
  const trip = [
    {
      img: tripImg,
      from:reservations.Trip_from,
      to: reservations.Trip_to,
      numberOfSeat:reservations.date,
      nextofKinPhone:reservations.nextofKinPhone,
      time:reservations.time,
      date:reservations.date,
      // price: "4,000",
    },
  ];
  const driver = [
    {
      img: driverImg,
      fullName:driverdetails.fullName,
      age:driverdetails.age,
      phoneNo:driverdetails.phoneNo,
      address:driverdetails.currentAddress,
    },
  ];
  const car = [
    {
      img: carImg,
      name:cardetails.carName,
      model:cardetails.carModel,
      color:cardetails.carColor,
      year:cardetails.carYear,
      licensePlate:cardetails.Platenumber,
      // licenseNumber: "1212334134",
      // age: "40",
      // phone: "+234 09018661696",
      // address: "Sabon Gari, Kano.",
    },
  ]
  const get_Trips = () => {
    fetch("http://127.0.0.1:34567/get_Trips?user_id="+user.id)
      .then((raw) => raw.json())
      .then((data) => {
        if (data.results && data.results.length) {
          setTrips(data.results);
        //   setDriverdetails(data.results);
        //   setCardetails(data.results);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    get_Trips();
  }, []);

  const get_driver = () => {
    fetch("http://127.0.0.1:34567/get_driverregistration_user?user_id="+user.id)
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
    fetch("http://127.0.0.1:34567/get_registercar?user_id="+user.id)
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
          {JSON.stringify({Trips,user,car})}
          <p
            style={{
              fontWeight: "bold",
              color: "grey",
            }}
          >
            Reservations
          </p>
          
          {Trips.map((item, index) => (
           <ReservationItems trip={item} driver={user} vehicle={car} />
          ))}
          {/* <Card className="reservation-card shadow-sm p-3 mb-3">
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
                  {/* {trip.map((item, index) => ()}} *
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
                        {/* <Trash size='2em' style={{color:'rgb(222,222,222)'}} /> *
                      </p>
                    </Col>
                  </Row>

                  {/* <Row className="p-3 mt-3">
                  <Col md={6}></Col>
                  <Col md={6}></Col>
                </Row> *
                  <Row className="p-2">
                    <Col md={3}>
                      <img alt='' src={item.img} className="driver" />
                    </Col>
                    <Col md={9}>
                      <p className="car-name" style={{ color: "grey" }}>
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          Full Name:{" "}
                        </span>
                        {user.fullName}
                      </p>
                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          Age:{" "}
                        </span>
                        {user.age}
                      </p>
                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          Phone:{" "}
                        </span>
                        {user.phoneNo}
                      </p>
                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          Address:{" "}
                        </span>
                        {user.currentAddress}
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
                        {/* <Trash size='2em' style={{color:'rgb(222,222,222)'}} /> *
                      </p>
                    </Col>
                  </Row>

                  {/* <Row className="p-3 mt-3">
                  <Col md={6}></Col>
                  <Col md={6}></Col>
                </Row> *
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
                      </p> *
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </Card>*/}
        </Card> 
      </div>
    </div>
  );
}
