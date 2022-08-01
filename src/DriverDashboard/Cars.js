import React, { useEffect, useState } from "react";
import { Edit } from "react-feather";
import { Navigate, useNavigate } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import carImg from "../Images/toyota.png";
import { useSelector } from "react-redux";
import { _fetchApi } from "../redux/action/api";

export default function Cars() {
  const driverInfo = useSelector(state => state.auth.user)
  const [cars, setCars] = useState([]);
  const navigate = useNavigate()

  const get_registercar = () => {
    _fetchApi(`/get_registercar?user_id=${driverInfo.id}`,
      (data) => {
        if (data.results && data.results.length) {
          setCars(data.results);
        }
      },
      (e) => {
        console.log(e);
      })
  };

  useEffect(() => {
    get_registercar();
  }, [])
  // const car = [
  //   {
  //     img: carImg,x  
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
                  cursor: 'pointer',
                  //   padding:5,
                }}
                onClick={() => navigate('/cars/register-your-car')}
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
                        {item.Platenumber}
                      </p>
                    </Col>
                    <Col md={2}>
                      <button className="request" style={{ float: "right" }}>
                        <Edit />
                      </button>
                    </Col>
                    <button className="request mt-2" onClick={() => navigate('/trips/create-trip')}>Create Trip</button>
                  </Row>
                </Card>
              </Col>
            ))}
            <div className="text-center mt-5">
              {cars.length === 0 ?
                <>
                  <h3 style={{ color: 'grey' }}>No car created yet</h3>
                  <button className="request" onClick={() => navigate('/cars/register-your-car')}>Create One Here</button>
                </>
                : null}
            </div>
          </Row>
        </Card>
      </div>
    </div>
  );
}
