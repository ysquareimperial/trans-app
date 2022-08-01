import React, { useEffect, useState } from "react";
import { Edit } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import tripImg from '../Images/trip.jpg'
import {useSelector} from "react-redux";
import { _fetchApi } from "../redux/action/api";
export default function Trips() {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const uerInfo = useSelector(state => state.auth.user)
  const get_Trips = () => {
    _fetchApi(`/get_Trips?user_id=${uerInfo .id}`, 
    (data) => {
          if (data.results && data.results.length) {
            setTrips(data.results);
          }
        }, 
        (e) => {
          console.log(e);
        })
  };


  useEffect(() => {
    get_Trips();
  }, [])
  // const trip = [
  //   {
  //     img: tripImg,
  //     from:uerInfo.Trip_from ,
  //     to:uerInfo.Trip_to,
  //     date: uerInfo.date,
  //     time: uerInfo.time,
  //     availableSeats: uerInfo.availableSeats,
  //     price: uerInfo.price ,
  //   },
  // ];
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
            {trips.map((item, index) => (
              <Col md={6}>
                <Card className="reservation-card shadow-sm p-3 mb-3">
                  <Row className="p-2">
                    <Col md={5}>
                      <img alt="" src={item.img} className="trip-image" />
                    </Col>
                    <Col md={5}>
                      <p className="car-name" style={{ color: "grey" }}>
                         {item.Trip_from} to {item.Trip_to}
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
                        ₦{item.price}
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
              <div className="text-center mt-5">
              {trips.length === 0 ?
              <>
                <h3 style={{ color: 'grey' }}>No trip created yet.</h3>
              <button className="request"  onClick={() => navigate('/trips/create-trip')}>Create One Here</button>
              </>
                 : null}
            </div>
          </Row>
        </Card>
      </div>
    </div>
  );
}
