import React,{useState,useRef} from 'react'
import {Modal,Button,Form} from "react-bootstrap";
let reasonCancel = ["Hết hàng","Shipper làm thất lạc đơn hàng"]
export default function CancelOrder() {
    const inputReason = useRef();
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const [isDisable,setDisabled] = useState(true);    
    const handleShow = () => setShow(true);
    const [values,setValue] = useState({
        reasonCancel: ""
    });

    const inputChange = (value) =>{
        setShow(true)
        setValue((values)=> ({
          ...values,
          reasonCancel : value
        })
        );
        setDisabled(false);
        if(value === "") {
          setDisabled(true);
        }
    }
    return (
        <>
          <Button variant="danger" onClick={handleShow}>
            Hủy
          </Button>
          <Modal show={show} onHide={handleClose} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" >
            <Modal.Header closeButton>
              <Modal.Title>Lý do hủy đơn hàng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <label>
            Choose a browser from this list:
            <input list="reasonCancel" name="reasonCancel" />  
            </label>   
            <datalist id="reasonCancel">
               {reasonCancel.map((reason,key)=>{
                 return (<option key={key} value={reason}/>)
               })} 
            </datalist>
            </Modal.Body>
          </Modal>
        </>
      );
}
