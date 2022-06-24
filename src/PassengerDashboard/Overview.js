import React from "react";
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
export default function Overview() {
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
          <p
            style={{
              fontWeight: "bold",
              color: "grey",
            }}
          >
            Overview
          </p>
          <Card className="reservation-card shadow-sm p-3 mb-3">
           </Card>
        </Card>
      </div>
    </div>
  );
}
