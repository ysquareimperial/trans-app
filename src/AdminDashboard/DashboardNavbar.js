import React, { useState } from "react";
import { ArrowDownCircle } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap'

import "./DashboardNavbar.css";
export default function DashboardNavbar() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
  const navigate = useNavigate();
  return (
    <div>
      <div className="dash-bar">
        <Row className="dashbar-row">
          <Col md={2} className="dash-items">
            {/* <img src={logo} alt="sRecord" className="ln-logo" /> */}
          </Col>
          <Col md={9} className="dash-items"></Col>
          <Col md={1} className="div">
            {/* <button
              className="signin-btn shadow"
              onClick={() => navigate("/login")}
              style={{ float: "right", marginRight: 30 }}
            >
              Sign Out
            </button> */}
            <Dropdown isOpen={open} toggle={toggle}>
              <DropdownToggle className="drop-down">
                <ArrowDownCircle />
              </DropdownToggle>
              <DropdownMenu className="drop-down-menu">
                {/* <DropdownItem header>Settings & Privacy</DropdownItem> */}
                {/* <DropdownItem disabled>Action</DropdownItem> */}
                <DropdownItem
                  className="drop-down-item"
                  onClick={() => navigate("/settings")}
                >
                  Settings
                </DropdownItem>
                <DropdownItem className="drop-down-item">
                  Help & Support
                </DropdownItem>
                <DropdownItem className="drop-down-item" divider />
                <DropdownItem className="drop-down-item">Sign Out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </div>
    </div>
  );
}
