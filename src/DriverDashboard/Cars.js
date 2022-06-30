import React from "react";
import { Edit } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import carImg from "../Images/toyota.png";

export default function Cars() {
  const navigate = useNavigate();

  const car = [
    {
      img: carImg,
      name: "Toyota",
      model: "Camry",
      color: "white",
      seats: "4",
      year: 1,
      licensePlate: "NSR-3-2-4",
    },
    {
      img: carImg,
      name: "Toyota",
      model: "Camry",
      color: "white",
      seats: "4",
      year: 1,
      licensePlate: "NSR-3-2-4",
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
                All Cars
              </p>
            </Col>
            <Col md={6}>
              {" "}
              <p
                style={{    
                  fontWeight: "bold",
                  color: "grey",
                  float: "right",
                  cursor:'pointer',
                //   padding:5,
                }}
                onClick={()=>navigate('/cars/register-your-car')}
              >
                Create New
              </p>
            </Col>
          </Row>

          <Row>
            {car.map((item, index) => (
              <Col md={6}>
                <Card className="reservation-card shadow-sm p-3 mb-3">
                  <Row className="p-2">
                    <Col md={5}>
                      <img alt="" src={item.img} className="driver-car" />
                    </Col>
                    <Col md={5}>
                      <p className="car-name" style={{ color: "grey" }}>
                        {item.name} {item.model}
                      </p>

                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          Color:{" "}
                        </span>
                        {item.color}
                      </p>
                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          seats:{" "}
                        </span>
                        {item.seats}
                      </p>
                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          Year:{" "}
                        </span>
                        {item.year}
                      </p>

                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          License Plate:{" "}
                        </span>
                        {item.licensePlate}
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
