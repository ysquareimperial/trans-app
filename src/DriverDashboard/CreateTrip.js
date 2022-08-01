import React, { useState } from "react";
import { Card, Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Trip() {
  const driverInfo = useSelector(state => state.auth.user)

  let _form = [
    {
      from: "",
      to: "",
      date: "",
      time: "",
      availableSeats: "",
      price: "",
      selectCar: '',
    },
  ];
  const navigate = useNavigate();
  const [createTripForm, setCreateTripForm] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setCreateTripForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    // e.preventDefault();
    //setLoading(true);
    fetch('http://127.0.0.1:34567/Trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...createTripForm, driver_id: driverInfo.id }),
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
            Create a Trip
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
                        placeholder="Going From"
                        id="Going From"
                        name="from"
                        value={createTripForm.from}
                        onChange={handleChange}
                      />
                      <label for="Going From" className="form-label">
                        Going From
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Stopping at"
                        id="Stopping at"
                        name="to"
                        value={createTripForm.to}
                        onChange={handleChange}
                      />
                      <label for="Stopping at" className="form-label">
                        Stopping at
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row className="p-3">
                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Date"
                        id="Date"
                        name="date"
                        value={createTripForm.date}
                        onChange={handleChange}
                      />
                      <label for="Date" className="form-label">
                        Date
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Time"
                        id="Time"
                        name="time"
                        value={createTripForm.time}
                        onChange={handleChange}
                      />
                      <label for="Time" className="form-label">
                        Time
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row className="p-3">
                  <Col md={6}>
                    <div className="form-group">
                      <select className="form-control" name='selectCar' value={createTripForm.selectCar} onChange={handleChange}>
                        <option>select car</option>
                        <option>Toyotal Camry, 12121NT</option>
                      </select>
                      <label for="select car" className="form-label">
                        select car
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Available Seats"
                        id="Available Seats"
                        name="availableSeats"
                        value={createTripForm.availableSeats}
                        onChange={handleChange}
                      />
                      <label for="Available Seats" className="form-label">
                        Available Seats
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
                        placeholder="Price"
                        id="Price"
                        name="price"
                        value={createTripForm.price}
                        onChange={handleChange}
                      />
                      <label for="Price" className="form-label">
                        Price
                      </label>
                    </div>
                  </Col>
                  <Col md={6}></Col>
                </Row>
                <Row className="m-1">
                  <div style={{ marginTop: "" }}>
                    <button
                      className="request mb-3"
                      onClick={() => {
                        handleSubmit();
                        navigate("/trips");
                      }}
                    >
                      Create
                    </button>
                  </div>
                </Row>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}
