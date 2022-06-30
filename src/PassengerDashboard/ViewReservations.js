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
  const [driverdetails, setDriverdetails] = useState([]);
  const [cardetails, setCardetails] = useState([]);
  const get_requestride = () => {
    fetch("http://127.0.0.1:34567/get_details")
      .then((raw) => raw.json())
      .then((data) => {
        if (data.results && data.results.length) {
          setReservations(data.results);
          setDriverdetails(data.results);
          setCardetails(data.results);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    get_requestride();
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
          
          {reservations.map((im) => (
           <ReservationItems ee={im} />
          ))}
        </Card>
      </div>
    </div>
  );
}
