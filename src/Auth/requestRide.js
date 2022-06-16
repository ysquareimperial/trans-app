import React from 'react'
import {Card,CardBody,Input,Row,Col} from "reactstrap"

function requestRide() {
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
      
     <Row>
      <h2 >Apply for a Ride</h2>
      </Row>
      
      <Card>
               <CardBody>
                <Row>
                   <Col  md={6} className='mb-2'>
                    From <Input type="text"/>
                   </Col>
                   <Col md={6} className='mb-2'>
                    To <Input type="text"/> 
                   </Col>
                </Row>
        </CardBody>
        </Card>
        
    </div>
  )
}

export default requestRide