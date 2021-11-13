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
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">Hết hàng</option>
                <option value="2">Shipper làm thất lạc đơn hàng</option>
                <option value="3">Three</option>
                </Form.Select>  
            </Modal.Body>
            
          </Modal>
        </>
      );
}
