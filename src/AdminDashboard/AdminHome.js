import React from "react";
import {Card, Row, Col, Input} from 'reactstrap'
export default function AdminHome() {
  return (
    <div>
      <Card
        className="shadow"
        style={{ marginTop: 10, border: "none", borderRadius: 0 }}
      >
        <h1>Admin Home</h1>
      </Card>
      <Row>
      <div  className="home" style={{marginTop:20, paddingLeft:"20px", paddingBottom:"50px"}}>
       <h5>
      <div>Want to become TransApp Driver to safe driving cost</div>
           <div>by sharing your ride with passenegers?</div>
           </h5>
        <Card>
          <Col>
         Kano <Input type="checkbox"/>
         </Col>
         <Col>
         Kaduna<Input type="checkbox"/>
         </Col>
        </Card>
      </div>
      </Row>
    </div>
  );
}
