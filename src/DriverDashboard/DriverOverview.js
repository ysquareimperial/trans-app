import React from "react";
import { Card, Row, Col } from "reactstrap";
import sedan from "../Images/car.png";

// import "./ViewReservation.css";
// import "./Overview.css";
import { GitPullRequest, Users } from "react-feather";
import { useSelector } from "react-redux";
export default function Overview() {
  // const year = () => {
  //   let currentYear = new Date();
  //   currentYear.getFullYear();
  // };
  const overview = [
    {
      cardTitle: "All Cars",
      cardNumber: "2",
      cardImage: <img alt='' src={sedan} style={{marginTop:15, width:55}}/>,
      // today: "Today: 0",
      // date: "Total Amount: 250,000",
    },
    {
      cardTitle: "All Trips",
      cardNumber: "10",
      cardImage: <GitPullRequest className="overview-icon" size="4em" />,
      // today: "Today: 0",
      // date: "2020 - Present: 10",
    },
    {
      cardTitle: "Passengers/today",
      cardNumber: 10,
      cardImage: <Users className="overview-icon" size="4em" />,
      // today: (new Date),
      // date: "2020 - Present: 50",
    },
  ];
  const users = useSelector(e => e)
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
          {/* {JSON.stringify(users)} */}
          <Row>
            {overview.map((item, index) => (
              <Col md={4}>
                <Card className="overview-card shadow-sm">
                  <div className="p-3">
                    <p className="overview-card-title">{item.cardTitle}</p>
                    <Row>
                      <Col md={8}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "grey",
                            fontSize: 50,
                          }}
                        >
                          {item.cardNumber}
                        </p>
                      </Col>
                      <Col md={4}>{item.cardImage}</Col>
                    </Row>

                    <Row>
                      <Col md={5}>
                        <p
                          style={{
                            margin: 0,
                            color: "grey",
                            fontWeight: "bold",
                          }}
                        >
                          {item.today}
                        </p>
                      </Col>
                      <Col md={7}>
                        <p
                          style={{
                            margin: 0,
                            color: "grey",
                            fontWeight: "bold",
                            float: "right",
                          }}
                        >
                          {item.date}
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    </div>
  );
}
