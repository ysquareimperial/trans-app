import React from "react";
import {
  Card,
  Row,
  Col,
  Modal,
  ModalBody,
  CardHeader,
  CardBody,
  Table,
} from "reactstrap";
import visa from "../Images/visa.png";
import carImg from "../Images/toyota.png";
import sedan from "../Images/car.png";
import driverImg from "../Images/ysquareimperial.png";
import protect from "../Images/protect.png";
import master from "../Images/master.png";
import { Clock, Calendar, User, GitPullRequest } from "react-feather";
import atm from "../Images/card.png";
import tripImg from "../Images/trip.png";
import "./ViewReservation.css";
import { MoreVertical } from "react-feather";
export default function TripHisory() {
  const history = [
    {
      date: "12/12/2020",
      time: "12 AM",
      from: "Kano",
      to: "Jigawa",
      car: "Toyota",
      model: "Camry",
      driver: "Muhammad Abdurrazaku",
    },
    {
        date: "12/12/2020",
        time: "12 AM",
        from: "Kano",
        to: "Jigawa",
        car: "Toyota",
        model: "Camry",
        driver: "Muhammad Abdurrazaku",
      },
      {
        date: "12/12/2020",
        time: "12 AM",
        from: "Kano",
        to: "Jigawa",
        car: "Toyota",
        model: "Camry",
        driver: "Muhammad Abdurrazaku",
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
            History
          </p>
          <Card className="reservation-card shadow-sm p-3 mb-3">
            <Table size="sm" hover borderless>
              <thead>
                <tr style={{ color: "grey" }}>
                  <th>
                    <Calendar className="sidebar-icon" />
                    Date
                  </th>
                  <th>
                    <Clock className="sidebar-icon" />
                    Time
                  </th>
                  <th>
                    <GitPullRequest className="sidebar-icon" />
                    Trip
                  </th>
                  <th>
                    <img
                      src={sedan}
                      className="sidebar-icon"
                      style={{ width: 30 }}
                    />
                    Car
                  </th>
                  <th>
                    {" "}
                    <User className="sidebar-icon" />
                    Driver
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, index) => (
                  <tr>
                    <td className="t-data">{item.date}</td>
                    <td className="t-data">{item.time}</td>
                    <td className="t-data">
                      {item.from} to {item.to}
                    </td>
                    <td className="t-data">
                      {item.car} {item.model}
                    </td>
                    <td className="t-data">{item.driver}</td>
                    <td className="t-data">
                      <MoreVertical className="more" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Card>
      </div>
    </div>
  );
}
