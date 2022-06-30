import React from "react";
import {
  Card,
  Table,
} from "reactstrap";
import sedan from "../Images/car.png";
import {
  Clock,
  Calendar,
  User,
  GitPullRequest,
  Eye,
  Trash,
  Slack,
} from "react-feather";
// import atm from "../Images/card.png";
// import tripImg from "../Images/trip.png";
import "./ViewReservation.css";
import { useNavigate } from "react-router-dom";
// import { MoreVertical } from "react-feather";
export default function TripHisory() {
  const navigate = useNavigate();
  // const [open1, setOpen1] = useState(false);
  // const toggle1 = () => {
  //   setOpen1(!open1);
  // };
  const history = [
    {
      id: 1,
      date: "12/12/2020",
      time: "12 AM",
      from: "Kano",
      to: "Jigawa",
      car: "Toyota",
      model: "Camry",
      driver: "Muhammad Abdurrazaku",
      text: "View",
    },
    {
      id: 2,
      date: "12/12/2020",
      time: "12 AM",
      from: "Kano",
      to: "Jigawa",
      car: "Toyota",
      model: "Camry",
      driver: "Muhammad Abdurrazaku",
      text: "View",
    },
    {
      id: 2,
      date: "12/12/2020",
      time: "12 AM",
      from: "Kano",
      to: "Jigawa",
      car: "Toyota",
      model: "Camry",
      driver: "Muhammad Abdurrazaku",
      text: "View",
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
                      alt=''
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
                  <th>
                    {" "}
                    <Slack className="sidebar-icon" />
                    Actions
                  </th>
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
                      <Eye
                      size='1.5em'
                        className="sidebar-icon-eye"
                        onClick={() =>
                          navigate(`/view-history?trip_id=${item.id}`)
                        }
                        style={{ cursor: "pointer" }}
                      />
                      <Trash
                       size='1.5em'
                        className="sidebar-icon-dlt"
                        style={{ cursor: "pointer" }}
                      />
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
