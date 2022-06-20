import React from 'react'
import {Card,CardBody,Input,Row,Col,Button} from "reactstrap"

function requestRide() {
  return (
    <div>
   
   <Card
    className="shadow"
    style={{  border: "none", borderRadius: 0 ,backgroundImage: `linear-gradient(skyBlue, white)`}}>
  <Row>
      <Col md={4}>

    <h1>TransApp</h1>
      </Col>
      <Col md={4}></Col>
      <Col md={2}></Col>
      <Col md={1}>

    <h6 className='mt-2'><a>log-out</a></h6>
      </Col>
      <Col md={1}>

    <h6 className='mt-2'><a>profile</a></h6>
      </Col>
  </Row>
  </Card>
      
           <Row>
                <h2 style={{marginTop:"30px"}}>Apply for a Ride. </h2>
            </Row>
      <Card className="shadow" style={{marginTop:"",marginLeft:"250px",marginRight:"250px", height:"770px", border:"non"}}>
        
               <CardBody >

                <Row>
                  <Row>
                    <Row>
                   <Col  md={6} className='mb-2'>
                    Inter City <Input type="checkbox" 
                    className="cool"
                    />
                    </Col>
                   <Col  md={6} className='mb-2'>
                    Oustside City <Input type="checkbox" 
                    className="cool"
                    />
                    </Col>
                    </Row>
                   <Col  md={6} className='mb-2'>
                    From: <Input type="text" 
                    className="login-input"/>
                   </Col>
                   <Col md={6} className='mb-2'>
                    To: <Input type="text" 
                    className="login-input"/> 
                   </Col>
                   <Col  md={6} className='mb-2'>
                    With Company <Input type="checkbox" 
                    className="cool"/>
                   </Col>
                   <Col  md={6} className='mb-2'>
                    Alone <Input type="checkbox" 
                    className="cool"/>
                   </Col>
                   </Row>
                   <Row>
                   <Col  md={6} className='mb-2'>
                    Number of Addult<Input type="number" 
                    className="login-input"/>
                   </Col>
                   <Col md={6} className='mb-2'>
                    Number of Children <Input type="number" 
                    className="login-input"/> 
                   </Col>
                   <Col  md={6} className='mb-2'>
                    Number of Infant<Input type="number" 
                    className="login-input"/>
                   </Col>
                   <div>
                   .......................................................................................................................................
                   </div>
                   </Row>
                   <Row>
                   <Col md={6} className='mb-2'>
                    check-in date<Input type="date" 
                    className="login-input"/> 
                   </Col>
                   <Col  md={6} className='mb-2'>
                    check-out<Input type="date" 
                    className="login-input"/>
                   </Col>
                   </Row>
                   
                   <Row>
                    
                   <Col  md={6} className='mb-2'>
                    Return Date<Input type="date" 
                    className="login-input"/>
                   </Col>
                   
                   <Col  md={6} className='mb-2'>
                    Return Time<Input type="time" 
                    className="login-input"/>
                   </Col>

                   </Row>


                   <Row>
                    
                   <Col  md={6} className='mb-2'>
                    Will you be bringng Pets <Input type="checkbox" 
                   className="cool" />
                    <Col>
                      How many? <Input type="text" 
                    className="login-input" />
                    </Col>
                   </Col>
                   
                   
                   <Col  md={6} className='mb-2'>
                   
                   Daily Routine<Input className='select' type="select" placeholder=''>
                    <option>--select--</option>
                    <option><Input type="checkbox" >Monday </Input></option>
                    <option>--select--</option>
                    <option>--select--</option>
                    <option>--select--</option>
                    <option>--select--</option>
                    <option>--select--</option>
                   </Input>
                   </Col>
                   <Row>
                   <Col>
                      Taxi for selected days 
                    </Col>
                    <Col>
                     Car <Input type="checkbox" className="cool" />
                    </Col>                 
                    <Col>
                     Bus <Input type="checkbox" className="cool" />
                    </Col>
                    <Col>
                     Luxirous <Input type="checkbox" className="cool"  />
                    </Col>
                   </Row>
                   </Row>
                </Row>
                <center>
                <Button
                  className="mt-2"
                  style={{backgroundColor:"blue",marginTop:"250px",border:"none",width:"40%"}}
              
                 
                >
                
                Apply
                </Button>
                </center>
        </CardBody>
        </Card>
        
    </div>
  )
}

export default requestRide