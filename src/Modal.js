import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
// import { themeClass } from '../variables';

function ModalAlert({ isOpen = false, toggle = (f) => f, prisonNo='' }) {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = () => setIsOpen(p => !p)

  return (
    <Modal toggle={toggle} isOpen={isOpen}>
      <ModalHeader toggle={toggle} style={{border:"none",color:"blue"}}>TransApp</ModalHeader>
      <ModalBody style={{backgroundColor:'blue',border:"none",color:"white"}}>
       Form submitted sucessfully!
      </ModalBody>
      <ModalFooter style={{border:"none"}}>
        <Button style={{backgroundColor:"blue",border:"none",color:"black",width:"40%"}} onClick={toggle}>
         Ok
        </Button>{' '}
      
      </ModalFooter>
    </Modal>
  );
}
export default ModalAlert;