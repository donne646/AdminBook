import React,{useState} from 'react'
import {Modal,Button,Form} from "react-bootstrap";
let reasonCancel = ["Hết hàng","Shipper làm thất lạc đơn hàng"]
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
            <Form.Control type="text" list="reasonCancel"/>
                <datalist id="reasonCancel">
                {reasonCancel.map((item, key) =>
                    <option key={key} value={item} />
                )}
                </datalist>
                <div className="btnSubmit d-flex justify-content-end">
                  <Button variant="primary" type="submit" disabled={isDisable}>
                                  Lưu
                  </Button>
                </div>    
            </Modal.Body>
          </Modal>
        </>
      );
}
