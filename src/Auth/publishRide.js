
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Card, Col, Row, CardBody, CardHeader, Input, Button} from 'reactstrap';
import ModalAlert from '../Modal';
import "../Styles.css";

function PublishRide() {
  const navigate = useNavigate();
  const [modalInfo, setModalInfo] = useState({})
  let _form = {
    CarName:"",
    LicencePlate: "",
    Caryear: "",
    LicenceNumber : "",
    CarColor :"",
    Carmodel:"",
    Totalseats:"",

  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleModal = () => setModalIsOpen((p) => !p);
  const [publishRide, setPublishRide] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setPublishRide((prev) => ({ ...prev, [name]: value }));
  };
   
  const handleSubmit = () => {
    // e.preventDefault();
    //setLoading(true);
    fetch('http://127.0.0.1:34567/Publish_ride', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(publishRide),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // setLoading(false);
        console.log(data);
        toggleModal()
        navigate("/pushlish-ride")
        // setModalIsOpen(true);
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  }

  return (
    <div>
    <Card
    className="shadow"
    style={{ marginTop: "", borderStyle: "none", borderRadius: 0 ,
      backgroundImage: `linear-gradient(skyBlue, white)`}}>
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

    <h6 className='mt-2'><a>logout</a></h6>
      </Col>
  </Row>
  </Card>
    
             
               <CardBody className='mt-5' style={{
  backgroundImage: `linear-gradient(light,lightGrey)`}} >
       <Row>
                   
           <Col md={2}></Col>
           <Col md={8}>
                   </Col>
                   <Col md={6} className='mb-2'>
           <Row>
              <h2> Do you have a Car?</h2>
            </Row>
           <Card>
               <CardBody className='shadow'>
                <Row>
<Col md={6}  className='mb-2'>
  <Row>
    <Col md={6}  className='mb-2'>
                
                    Car Name <Input type="text"
                      className="login-input"
                      placeholder="  Car Name  "
                      name="CarName"
                      value={publishRide.CarName}
                      onChange={handleChange}/>
                   </Col>
                   <Col md={6}  className='mb-2'>
                    Car Color <Input type="text"
                      className="login-input"
                      placeholder=" Car Color "
                      name="CarColor"
                      value={publishRide.CarColor}
                      onChange={handleChange}/>
                   </Col>
  </Row>

                    Licence Plate <Input type="text"
                    className="login-input"
                    placeholder="Licence Plate "
                    name="LicencePlate"
                    value={publishRide.LicencePlate}
                    onChange={handleChange}/>
                   </Col>
                 
                </Row>
                   <Row> <Col className='mb-2'>
                    Car year <Input type="text"
                       className="login-input"
                       placeholder="  Car year "
                       name="Caryear"
                       value={publishRide.Caryear}
                       onChange={handleChange}/>
                   </Col>
                   <Col className='mb-2'>
                   Car model <Input type="text"
                    className="login-input"
                    placeholder="Car model"
                    name="Carmodel"
                    value={ publishRide.Carmodel}
                    onChange={handleChange}/>
                   </Col></Row>
                   <Col md={6} className='mb-2'>
                   Licence Number <Input type="text"
                    className="login-input"
                    placeholder="Licence Number"
                    name="LicenceNumber"
                    value={ publishRide.LicenceNumber}
                    onChange={handleChange}/>
                   </Col>
                  
                   <Col md={6} className='mb-2'>
                  Total seats <Input type="text"
                    className="login-input"
                    placeholder=" Total seats "
                    name="Totalseats"
                    value={ publishRide.Totalseats}
                    onChange={handleChange}/>
                   </Col>
                   <Col md={{ size: '6', offset: '5' }}>
                <Button
                  className="mt-2"
                  style={{backgroundColor:"blue",border:"none",width:"40%"}}
                  onClick={handleSubmit}
                 
                >
                
                Submit
                </Button>
                </Col>
               
               </CardBody>
           </Card>
           </Col>
        
           
           
       </Row>
               </CardBody>
               <ModalAlert isOpen={modalIsOpen} toggle={toggleModal} />
           
  </div>
  );
  
}

export default PublishRide