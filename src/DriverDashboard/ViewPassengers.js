import React from "react";
import { Card, Col, Row } from "reactstrap";

// import "./ViewReservation.css";
// import { useNavigate } from "react-router-dom";
import image1 from "../Images/ysquareimperial.png";
export default function ViewPassengers() {
  // const navigate = useNavigate();

  const trip = [
    {
      from: "Kano",
      to: "Abuja",
      date: "12/12/2022",
      time: "1:00 AM",
      price: "5000",
    },
  ];

  const passengers = [
    {
      passengerImage: image1,
      passengerName: "Yasir Ado Hassan",
    },
    {
      passengerImage: image1,
      passengerName: "Yasir Ado Hassan",
    },
    {
      passengerImage: image1,
      passengerName: "Yasir Ado Hassan",
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
            Passengers
          </p>
          {trip.map((item, index) => (
            <Card className="reservation-card shadow-sm p-3 mb-3">
              <Row>
                <Col md={2}>
                  <p className="car-name" style={{ color: "grey" }}>
                    <span style={{ fontWeight: "normal", fontSize: 13 }}>
                      From:{" "}
                    </span>
                    {item.from} <span style={{ fontWeight: "normal" }}>to</span>{" "}
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
                      Price:{" "}
                    </span>
                    ₦ {item.price}
                  </p>
                </Col>
                {passengers.map((item, index) => (
                  <Col md={1} className="">
                    <img
                      alt=""
                      src={item.passengerImage}
                      className="passengerImage"
                    />
                    <br />
                    <p className="" style={{ color: "grey" }}>
                      {item.passengerName.length > 7
                        ? `${item.passengerName.substring(0, 7)}...`
                        : item.passengerName}
                    </p>
                  </Col>
                ))}
              </Row>
            </Card>
          ))}
        </Card>
      </div>
    </div>
  );
}
