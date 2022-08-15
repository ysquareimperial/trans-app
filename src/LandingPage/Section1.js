import React, { useEffect } from "react";
import { Card, CardBody, Col, Modal, ModalBody, Row } from "reactstrap";
import car from "../Images/car.jpg";
import { useNavigate } from "react-router-dom";
import "./Section1.css";
import { useState } from "react";
import toyota from "../Images/toyota.png";
import { _postApi } from "../redux/action/api";
export default function Section1() {
  let _form = [
    {
      from: "",
      to: "",
      date: "",
      time: "",
    },
  ];
  const [searchForm, setSearchForm] = useState(_form);
  const [tripList, setTripList] = useState([])
    const [nigerianstates, setNigerianstates] = useState([])

  const handleChange = ({ target: { name, value } }) => {
    setSearchForm((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const [open1, setOpen1] = useState(false);
  const [Cars, setCars] = useState([]);
  const [availabletrips, setAvailabletrips] = useState([]);
  const get_Availabletrips = () => {
    fetch("http://127.0.0.1:34567/get_Trips")
      .then((raw) => raw.json())
      .then((data) => {
        if (data.results && data.results.length) {
          setAvailabletrips(data.results);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getNigerianstates = () => {
    fetch('http://127.0.0.1:34567/nigerianstates')
      .then((resp) => resp.json())
      .then((data) => {
        // setLoading(false);
        console.log(data);
        //   setModalIsOpen(true);
        let stateList = data.results.map(m => m.State)
        setNigerianstates(stateList);
      }) 
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  };
  useEffect(() => {
    getNigerianstates();
  }, []);

  // useEffect(() => {
  //   get_Availabletrips();
  // }, [])
  const toggle1 = () => {
    setOpen1(!open1);
  };

  const handleSubmit = () => {
    // console.log(searchForm);
    _postApi(`/get_availableTrips`, searchForm, data => {
      setTripList(data.results)
      toggle1();
    }, err => {
      alert(`An error occured`)
    })
  };

  // const cars = [
  //   {
  //     carImage: toyota,
  //     carName: "Toyota Camry",
  //     from: "Kano",
  //     to: "Kaduna",
  //     time: "12:00 PM",
  //     date: "12/02/2022",
  //     seats: 1,
  //   },
  //   {
  //     carImage: toyota,
  //     carName: "Toyota Camry",
  //     from: "Kano",
  //     to: "Kaduna",
  //     time: "12:00 PM",
  //     date: "12/02/2022",
  //     seats: 1,
  //   },
  //   {
  //     carImage: toyota,
  //     carName: "Toyota Camry",
  //     from: "Kano",
  //     to: "Kaduna",
  //     time: "12:00 PM",
  //     date: "12/02/2022",
  //     seats: 1,
  //   },
  //   {
  //     carImage: toyota,
  //     carName: "Toyota Camry",
  //     from: "Kano",
  //     to: "Kaduna",
  //     time: "12:00 PM",
  //     date: "12/02/2022",
  //     seats: 1,
  //   },
  //   {
  //     carImage: toyota,
  //     carName: "Toyota Camry",
  //     from: "Kano",
  //     to: "Kaduna",
  //     time: "12:00 PM",
  //     date: "12/02/2022",
  //     seats: 1,
  //   },
  // ];
  return (
    <div>
      <Row
        className="m-0"
        style={{
          //   textAlign: "center",
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${car})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Col md={6}>
          <div className="title-wrap">
            <h3 className="trans-head">trans app</h3>
            <h5>The Transit Your Can Trust...</h5>
            <p>
              ...manages and tracks records of both driver(S) and passengers
            </p>
            <input
              type="submit"
              className="goto"
              name=""
              onClick={() => navigate("/register")}
              value={`Goto Signup`}
            />
          </div>
        </Col>
        <Col md={6} style={{ position: "relative" }}>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <div className="login-form">
                <>
                  <Card className="search-card shadow-lg">
                    <CardBody className="">
                      {/* <div>
                      <CustomForm
                      fields={loginFields}
                      handleChange={handleChange}
                      />
                    </div> */}
                      <p className="login-text">Search for a ride</p>
                      <hr style={{ padding: 0 }}></hr>
                      <Row>
                        <Col md={6}>
                          {/* <p
                            style={{ color: "white", margin: 0, marginTop: 10 }}
                          >
                            From
                          </p> */}
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="from"
                              id="from"
                              name="from"
                              value={searchForm.from}
                              onChange={handleChange}
                              // options={nigerianstates}
                            />

                            <label
                              for="from"
                              style={{ color: "rgb(160,160,160)" }}
                              className="form-label"
                            >
                              From
                            </label>
                          </div>
                        </Col>
                        <Col md={6}>
                          {/* <p
                            style={{ color: "white", margin: 0, marginTop: 10 }}
                          >
                            To
                          </p> */}
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="to"
                              id="to"
                              name="to"
                              value={searchForm.to}
                              onChange={handleChange}
                            />
                            <label
                              for="to"
                              style={{ color: "rgb(160,160,160)" }}
                              className="form-label"
                            >
                              To
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          {/* <p
                            style={{ color: "white", margin: 0, marginTop: 10 }}
                          >
                            Date
                          </p> */}
                          <div className="form-group">
                            <input
                              type="date"
                              className="form-control"
                              placeholder="Date"
                              id="Date"
                              name="date"
                              value={searchForm.date}
                              onChange={handleChange}
                            />
                            <label
                              for="Date"
                              className="form-label"
                              style={{ color: "rgb(160,160,160)" }}
                            >
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
                              value={searchForm.time}
                              onChange={handleChange}
                            />
                            <label
                              for="Time"
                              className="form-label"
                              style={{ color: "rgb(160,160,160)" }}
                            >
                              Time
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <button
                        className="go mt-3"
                        onClick={() => {
                          // toggle1();
                          handleSubmit();
                        }}
                      >
                        Go
                      </button>
                      <div className="text-center">
                        <hr style={{ padding: 0 }}></hr>
                        <p
                          style={{
                            fontSize: "13px",
                            marginTop: 5,
                            color: "grey",
                          }}
                        >
                          Don't have an account?{" "}
                          <span style={{ cursor: "pointer" }}>
                            Register here!
                          </span>{" "}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </>
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Col>
      </Row>
      <Modal size="" isOpen={open1} toggle={toggle1} className="avail-cars">
        <ModalBody className="modal-body">
          <p className="avail">Available Cars</p>
          {/* {JSON.stringify(tripList)} */}
          {tripList.map((item, index) => (
            <Row className="mt-4">
              <Col md={3}>
                <img src={toyota} style={{ width: 110 }} alt="bg" />
              </Col>
              <Col md={6}>
                <p className="car-name">{item.carName}</p>
                <p className="from-to">
                  {item.Trip_from} to {item.Trip_to}
                </p>
                <p className="time">{item.time}</p>
                <p className="from-to">{item.date}</p>
                <p className="from-to">
                  Available seats:{" "}
                  <span style={{ fontWeight: "bold" }}>{item.availableSeats}</span>
                </p>
                <p className="from-to">
                  Price:{" "}
                  <span style={{ fontWeight: "bold" }}>{item.price}</span>
                </p>
              </Col>
              <Col md={3}>
                <button
                  className="request-btn"
                  onClick={() =>
                    navigate(
                      `/login?rdr=true&from=${searchForm.from}&to=${searchForm.to}&date=${searchForm.date}&time=${searchForm.time}`
                    )
                  }
                >
                  Request
                </button>
              </Col>
              <hr className="mt-2"></hr>
            </Row>
          ))}
          <p className="text-center">{tripList.length === 0 ? <span>Sorry, No available trip.</span> : null}</p>
          <div className="mt-3">
            <button className="close" onClick={toggle1}>
              Close
            </button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
