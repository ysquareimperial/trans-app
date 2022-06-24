import React from "react";
import {
  Card,
  Table,
} from "reactstrap";
import toyota from "../Images/toyota.png";
import { useNavigate } from "react-router-dom";
import ysquareimperial from "../Images/ysquareimperial.png";

export default function AvailableCars() {
  const navigate = useNavigate();

  const cars = [
    {
      carImage: toyota,
      carName: "Toyota Camry",
      from: "Kano",
      to: "Kaduna",
      time: "12:00 PM",
      date: "12/02/2022",
      seats: 1,
      driverImg: ysquareimperial,
      driverName: ysquareimperial,
      driverPhone: "09018661696",
    },
  ];

  return (
    <div>
      <Card
        className="request-card shadow p-3"
        style={{ marginTop: 78, border: "none", overflowY: "scroll" }}
      >
        <Card className="reservation-card shadow-sm p-3 mb-3">
          <p
            style={{
              fontWeight: "bold",
              color: "grey",
            }}
          >
            Available Cars
          </p>
          <Table size="sm" hover borderless>
            <thead>
              <tr style={{ color: "grey" }}>
                <th>Car</th>
                <th>Car details</th>
                <th>Driver</th>
                <th>
                  <img
                    //   src={sedan}
                    className="sidebar-icon"
                    style={{ width: 30 }}
                  />
                  Driver details
                </th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((item, index) => (
                <tr>
                  <td className="t-data">{item.carImage}</td>
                  <td className="t-data">
                    {item.carName} {<br></br>}
                    {item.from} to {item.to}
                    {<br></br>}
                    {item.time}
                    {<br></br>}
                    {item.date}
                    {<br></br>}
                    Available seats: {item.seats}
                    {<br></br>}
                  </td>
                  <td>{item.driverImg}</td>
                  <td>
                    {item.driverName}
                    {<br></br>}
                    {item.driverPhone}
                  </td>
                  <td>fdfdf</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Card>
    </div>
  );
}
