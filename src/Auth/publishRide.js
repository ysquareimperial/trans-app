import React from 'react'
import {Card, Col, Row, CardBody, CardHeader, Input, Button} from 'reactstrap';

function publishRide() {
  return (
    <div>
    <Card
    className="shadow"
    style={{ marginTop: 10, border: "none", borderRadius: 0 ,}}>
  <Row>
      <Col md={4}>

    <h1>Welcome To TransApp</h1>
      </Col>
      <Col md={4}></Col>
      <Col md={2}></Col>
      <Col md={1}>

    <h6 className='mt-2'><a>log-out</a></h6>
      </Col>
      <Col md={1}>

    <h6 className='mt-2'><a>logout</a></h6>
      </Col>
  </Row>
  </Card>
    
             
               <CardBody className='mt-5'>
       <Row>
                   
           <Col md={2}></Col>
           <Col md={8}>
           <Row>
               Personal Information with Car Details
            </Row>
           <Card>
               <CardBody>
                   <Col className='mb-2'>
                    First Name <Input type="text"/>
                   </Col>
                   <Col className='mb-2'>
                    Last Name <Input type="text"/>
                   </Col>
                   <Col className='mb-2'>
                   language <Input type="text"/>
                   </Col>
               </CardBody>
           </Card>
           <Row>
               Do you have a Car?
            </Row>
           <Card>
               <CardBody>
                   <Col className='mb-2'>
                    Licence Plate <Input type="text"/>
                   </Col>
                   <Col className='mb-2'>
                    Car Color <Input type="text"/>
                   </Col>
                   <Col className='mb-2'>
                    Car year <Input type="text"/>
                   </Col>
                   <Col className='mb-2'>
                   Licence Number <Input type="text"/>
                   </Col>
                   <Col md={4}></Col>
                   <Button>Submit</Button>
               </CardBody>
           </Card>
           </Col>
           <Col md={2}></Col>
           
           
       </Row>
               </CardBody>
           
  </div>
  );
}

export default publishRide