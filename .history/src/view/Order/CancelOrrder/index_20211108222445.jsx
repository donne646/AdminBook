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
            <input type="text" list="data" onChange={} />
                <datalist id="data">
                {this.state.data.map((item, key) =>
                    <option key={key} value={item.displayValue} />
                )}
                </datalist>
            </Modal.Body>
            
          </Modal>
        </>
      );
}
