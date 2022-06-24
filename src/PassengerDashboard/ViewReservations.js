import React, { useEffect, useState } from "react";
import { Card, Row, Col, Modal, ModalBody } from "reactstrap";
import visa from "../Images/visa.png";
import carImg from "../Images/toyota.png";
import driverImg from "../Images/ysquareimperial.png";
import protect from "../Images/protect.png";
import master from "../Images/master.png";
import atm from "../Images/card.png";
import tripImg from "../Images/trip.png";
import "./ViewReservation.css";
import { Trash } from "react-feather";
import ReservationItems from "./ReservationItems";
export default function ViewReservations() {
  const [reservations, setReservations] = useState([]);
  const get_requestride = () => {
    fetch("http://127.0.0.1:34567/get_requestride")
      .then((raw) => raw.json())
      .then((data) => {
        if (data.results && data.results.length) {
          setReservations(data.results);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    get_requestride();
  }, []);
  const trip = [
    {
      img: tripImg,
      from: "Kano",
      to: "Zaria",
      numberOfSeat:'2',
      nextofKinPhone:'07032906691',
      time: "12:00PM",
      date: "12/12/2020",
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
  return (
    <div>
      <div>
        <Card
          className="request-card shadow p-3"
          style={{ marginTop: 78, border: "none" }}
          >
          {/* {JSON.stringify(reservations)} */}
          <p
            style={{
              fontWeight: "bold",
              color: "grey",
            }}
          >
            Reservations
          </p>
          
          {reservations.map((im) => (
           <ReservationItems ee={im} />
          ))}
        </Card>
      </div>
    </div>
  );
}
