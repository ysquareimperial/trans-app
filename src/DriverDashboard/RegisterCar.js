import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function RegisterCar() {
  let _form = [
    {
      carName: "",
      carModel: "",
      carImage: "",
      carSeats: "",
      carColor: "",
      carYear: "",
      LicensePlate: "",
    },
  ];
  const navigate = useNavigate();
  const [registerCarForm, setRegisterCarForm] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setRegisterCarForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    // e.preventDefault();
    //setLoading(true);
    fetch('http://127.0.0.1:34567/registercar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerCarForm),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // setLoading(false);
        console.log(data);
        // toggleModal()
        // navigate("/pushlish-ride")
        // setModalIsOpen(true);
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
      
  }
  useEffect(() => {
    // RegisterCar();
  }, [])
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
            Register your car
          </p>

          <Row>
            <Col md={8}>
              <Card className="overview-card shadow-sm">
                <Row className="p-3 mt-3">
                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Car Name"
                        id="Car Name"
                        name="carName"
                        value={registerCarForm.carName}
                        onChange={handleChange}
                      />
                      <label for="Car Name" className="form-label">
                        Car Name
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Car Model"
                        id="Car Model"
                        name="carModel"
                        value={registerCarForm.carModel}
                        onChange={handleChange}
                      />
                      <label for="Car Model" className="form-label">
                        Car Model
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row className="p-3">
                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control"
                        placeholder="Car Image"
                        id="Car Image"
                        name="carImage"
                        value={registerCarForm.carImage}
                        onChange={handleChange}
                      />
                      <label for="Car Image" className="form-label">
                        Car Image
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Car Color"
                        id="Car Color"
                        name="carColor"
                        value={registerCarForm.carColor}
                        onChange={handleChange}
                      />
                      <label for="Car Color" className="form-label">
                        Car Color
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row className="p-3">
                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Car Year"
                        id="Car Year"
                        name="carYear"
                        value={registerCarForm.carYear}
                        onChange={handleChange}
                      />
                      <label for="Car Year" className="form-label">
                        Car Year
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Car Seats"
                        id="Car Seats"
                        name="carSeats"
                        value={registerCarForm.carSeats}
                        onChange={handleChange}
                      />
                      <label for="Car Seats" className="form-label">
                        Car Seats
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row className="p-3">
                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="License Plate"
                        id="License Plate"
                        name="licensePlate"
                        value={registerCarForm.licensePlate}
                        onChange={handleChange}
                      />
                      <label for="License Plate" className="form-label">
                        License Plate
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <button
                      className="request"
                      onClick={() => {
                        handleSubmit();
                        navigate("/cars");
                      }}
                    >
                      Register
                    </button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}
