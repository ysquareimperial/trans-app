import React from "react";
import {
  CreditCard,
  Edit2,
  GitPullRequest,
  MapPin,
  Phone,
  PlusSquare,
  XCircle,
} from "react-feather";
import { Card, Col, Row } from "reactstrap";
import ysquare from "../Images/ysquareimperial.png";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="mt-5">
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
          Profile
        </p>
        <Card className="reservation-card shadow-sm p-3 mb-3">
          <div>
            <Row>
              <Col md={2}>
                <img src={ysquare} alt='profile img' className="profile-image shadow" />
              </Col>
              <Col md={8}>
                <h2 style={{ color: "grey" }}>Yasir Ado Hassan</h2>
                <p style={{ color: "rgb(7, 82, 94)" }}>
                  ysquare.theimperial@gmail.com
                </p>
                <Row>
                  <Col md={6}>
                    <p className="acc-abt">
                      <Phone className="pro-icon" />
                      Phone: <span className="spn">+234 09018661696</span>
                    </p>
                    <p className="acc-abt">
                      <MapPin className="pro-icon" />
                      Address:{" "}
                      <span className="spn">Kundila, Maiduguri Road.</span>
                    </p>
                    <p className="acc-abt">
                      <CreditCard className="pro-icon" /> NIN:{" "}
                      <span className="spn">2212456890</span>
                    </p>
                  </Col>
                  <Col md={6}>
                    <p className="acc-abt">
                      <PlusSquare className="pro-icon" />
                      Total Reservations: <span className="spn">50</span>
                    </p>
                    <p className="acc-abt">
                      <XCircle className="pro-icon" />
                      Canceled Reservations: <span className="spn">10</span>
                    </p>
                    <p className="acc-abt">
                      <GitPullRequest className="pro-icon" /> Total Ride
                      Distance: <span className="spn">50 km</span>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={2}>
                <button className="update-btn"><Edit2/></button>
              </Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={5}></Col>
              <Col md={5}></Col>
            </Row>
          </div>
        </Card>
      </Card>
    </div>
  );
}
