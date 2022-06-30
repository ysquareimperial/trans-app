import React from "react";
import { Card } from "reactstrap";
import '../PassengerDashboard/ViewReservation.css'
import '../PassengerDashboard/Overview'
// import { GitPullRequest, XCircle } from "react-feather";
// import { PlusSquare } from "react-feather";
export default function DriverOverview() {
  // const overview = [
  //   {
  //     cardTitle: "Total Reservations",
  //     cardNumber: "50",
  //     cardImage: <PlusSquare className="overview-icon" size="4em" />,
  //     today: "Today: 0",
  //     date: "Total Amount: 250,000",
  //   },
  //   {
  //     cardTitle: "Canceled Reservations",
  //     cardNumber: "10",
  //     cardImage: <XCircle className="overview-icon" size="4em" />,
  //     today: "Today: 0",
  //     date: "2020 - Present: 10",
  //   },
  //   {
  //     cardTitle: "Total Ride Distance",
  //     cardNumber: (
  //       <>
  //         50,000 <span style={{ fontSize: 15 }}>km</span>
  //       </>
  //     ),
  //     cardImage: <GitPullRequest className="overview-icon" size="4em" />,
  //     today: "Today: 0",
  //     date: "2020 - Present: 50",
  //   },
  // ];
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
            Driver
          </p>

          {/* <Row>
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
          </Row> */}
        </Card>
      </div>
    </div>
  );
}
