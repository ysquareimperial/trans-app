import React, { useEffect, useState } from "react";
import { Edit } from "react-feather";
import { Navigate, useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import carImg from "../Images/toyota.png";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate()
 
  const get_registercar = () => {
    fetch("http://127.0.0.1:34567/get_registercar")
      .then((raw) => raw.json())
      .then((data) => {
        if (data.results && data.results.length) {
          setCars(data.results);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    get_registercar();
  }, [])
  // const car = [
  //   {
  //     img: carImg,
  //     name: cars.carName,
  //     model: cars.carModel,
  //     color:cars.carColor,
  //     seats: cars.carSeats,
  //     year: cars.carYear,
  //     licensePlate:cars.LicensePlate,
  //   },
  //   {
  //     img: carImg,
  //     name: "Toyota",
  //     model: "Camry",
  //     color: "white",
  //     seats: "4",
  //     year: 1,
  //     licensePlate: "NSR-3-2-4",
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
                All Cars
              </p>
            </Col>
                {/* {JSON.stringify(cars)} */}
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
            {cars.map((item, index) => (
              <Col md={6}>
                <Card className="reservation-card shadow-sm p-3 mb-3">
                  <Row className="p-2">
                    <Col md={5}>
                      <img alt="" src={item.img} className="driver-car" />
                    </Col>
                    <Col md={5}>
                      <p className="car-name" style={{ color: "grey" }}>
                        {item.carName} {item.carModel}
                      </p>

                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          Color:{" "}
                        </span>
                        {item.carColor}
                      </p>
                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          seats:{" "}
                        </span>
                        {item.carSeats}
                      </p>
                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          Year:{" "}
                        </span>
                        {item.carYear}
                      </p>

                      <p className="from-to">
                        <span style={{ fontWeight: "normal", fontSize: 13 }}>
                          License Plate:{" "}
                        </span>
                        {item.LicensePlate}
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
