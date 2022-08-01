import React, { useEffect, useState } from "react";
import { Menu } from "react-feather";
import { useNavigate } from "react-router-dom";
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import ysquare from "../Images/ysquareimperial.png";
import "./DashboardNavbar.css";
import {useSelector} from "react-redux";



export default function DashboardNavbar() {
  const [profile, setProfile] = useState({});
const uerInfo = useSelector(state => state.auth.user)
const get_profile = () => {
  fetch("http://127.0.0.1:34567/profile")
    .then((raw) => raw.json())
    .then((data) => {
      if (data.results && data.results.length) {
        setProfile(data.results[0]);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

useEffect(() => {
  get_profile();
},[])
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Row className="nav-row m-0 p-0">
        <Col md={6}>
          <Row>
            <Col md={1}>
              <p className="logo">
                {/* <img
                  className="logo"
                  src={logo}
                  alt="sdfa"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="sRecord"
                  onClick={() => navigate("/home")}
                /> */}
                LOGO
              </p>
            </Col>
            <Col md={11}>
              {/* <div class="has-search">
                        <span class="form-control-feedback"><Search/></span>
                        <input type="text" class="search-input" placeholder="Search sRecord" />
                    </div> */}
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Dropdown isOpen={open} toggle={toggle}>
            <DropdownToggle className="drop-down">
              <Menu />
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
              <DropdownItem className="drop-down-item" onClick={()=>{
                localStorage.removeItem('transapp:phone')
                localStorage.removeItem('transapp:type')
                navigate('/login')
              }}>Sign Out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div className="dp-name" onClick={() => navigate("/profile")}>
            <img
              src={ysquare}
              className="dp"
              alt="profile"
              style={{ display: "inline" }}
            />
            <p style={{ display: "inline" }}>{uerInfo.fullName}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
