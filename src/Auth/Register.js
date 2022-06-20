import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row } from "reactstrap";
import "../Styles.css";
import { useNavigate } from "react-router-dom";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import PassengerReg from "./PassengerReg";
import DriverReg from "./DriverReg";
export default function Register() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [activeTab, setActiveTab] = useState("0");
  const toggle2 = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="login-body">
      <div className="container">
        <Row className="login-row">
          {/* <Col md={1}></Col> */}
          <Col className="" md={6}>
            <h1 className="login-title">Trans App</h1>
            <h4 className="bkd">The Transit You Can Trust...</h4>
            <p className="login-p">
              ...manages and tracks records of both driver(s) and passengers
            </p>
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login Here
            </button>
          </Col>
          <Col md={6} className="reg-card-con">
            <Card className="px-5 py-5 login-card mb-4">
              <h1 className="login">Register</h1>
              <div>
                {/* <div>
                  <p
                    style={{
                      fontSize: 12,
                      margin: 0,
                      marginTop: 10,
                      float: "left",
                      color: "white",
                    }}
                  >
                    Register as:
                  </p>
                </div> */}
                <Nav tabs className="">
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "0" })}
                      onClick={() => {
                        toggle2("0");
                      }}
                    >
                      Passenger
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "4" })}
                      onClick={() => {
                        toggle2("4");
                      }}
                    >
                      Driver
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="0">
                  <PassengerReg />
                </TabPane>
                <TabPane tabId="4">
                  <Row>
                    <Col sm="12">
                      {/* <RecordTable /> */}
                      <DriverReg />
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Card>
          </Col>
          {/* <Col md={1}></Col> */}
        </Row>
      </div>
    </div>
  );
}
