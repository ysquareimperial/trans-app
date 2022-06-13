import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import AllPassengers from "./AllPassengers";
import AllDrivers from "./AllDrivers";
export default function AllUsers() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [activeTab, setActiveTab] = useState("0");
  const toggle2 = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Card className="shadow p-4" style={{ marginTop: 10, border:'none', borderRadius:0 }}>
        <Container>
          <div className="mt-3">
            <Nav tabs className="">
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "0" })}
                  onClick={() => {
                    toggle2("0");
                  }}
                >
                  Passengers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "4" })}
                  onClick={() => {
                    toggle2("4");
                  }}
                >
                  Drivers
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="0">
              <AllPassengers />
            </TabPane>
            <TabPane tabId="4">
              <Row>
                <Col sm="12">
                  <AllDrivers />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </Card>
    </div>
  );
}
