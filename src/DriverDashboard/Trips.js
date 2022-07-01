import React, { useEffect, useState } from "react";
import { Edit } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";

export default function Trips() {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const get_Trips = () => {
    fetch("http://127.0.0.1:34567/get_Trips")
      .then((raw) => raw.json())
      .then((data) => {
        if (data.results && data.results.length) {
          setTrips(data.results);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    get_Trips();
  }, [])
  const trip = [
    {
      from: "Kano",
      to: "Abuja",
      date: "12/12/2222",
      time: "12:AM",
      availableSeats: 4,
      price: "5000",
    },
  ];
  return (
    <div>
      <div>
        <Card
          className="request-card shadow p-3"
          style={{ marginTop: 78, border: "none" }}
        >
          <Row>
            <Col md={6}>
              <p
                style={{
                  fontWeight: "bold",
                  color: "grey",
                }}
              >
                All Trips
              </p>
            </Col>
            <Col md={6}>
              {" "}
              <p
                style={{
                  fontWeight: "bold",
                  color: "grey",
                  float: "right",
                  cursor: "pointer",
                  //   padding:5,
                }}
                onClick={() => navigate("/trips/create-trip")}
              >
                Create New
              </p>
            </Col>
          </Row>

          <Row>
            {trip.map((item, index) => (
              <Col md={6}>
                <Card className="reservation-card shadow-sm p-3 mb-3">
                  <Row className="p-2">
                    <Col md={5}>
                      {/* <img alt="" src={item.img} className="driver-car" /> */}
                    </Col>
                    <Col md={5}>
                      <p className="car-name" style={{ color: "grey" }}>
                        Trip from {item.Trip_from} to {item.Trip_to}
                      </p>

                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          Date:{" "}
                        </span>
                        {item.date}
                      </p>
                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          Time:{" "}
                        </span>
                        {item.time}
                      </p>
                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          Available Seats:{" "}
                        </span>
                        {item.availableSeats}
                      </p>

                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          Price:{" "}
                        </span>
                        {item.price}
                      </p>
                    </Col>
                    <Col md={2}>
                      <button className="request" style={{ float: "right" }}>
                        <Edit />
                      </button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    </div>
  );
}
