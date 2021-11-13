import React,{useState} from 'react'
import {Modal,Button,Form} from "react-bootstrap";
export default function CancelOrder() {
    
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
        
    const handleShow = () => setShow(true);
    return (
        <>
          <Button variant="danger" onClick={handleShow}>
            Hủy
          </Button>
          <Modal show={show} onHide={handleClose} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title>Lý do hủy đơn hàng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <input type="text" name="example" list="exampleList">
                <datalist id="exampleList">
                    <option value="A"/>  
                    <option value="B"/>
                </datalist>
            </input>
            </Modal.Body>
            
          </Modal>
        </>
      );
}
