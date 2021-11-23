import React,{useState} from 'react'
import {Button,Form,Modal,FloatingLabel} from "react-bootstrap";

let reasonCancel = [
  {reason: "Hết hàng"},
  {reason:"Shipper làm thất lại đơn hàng"},
  {reason: "Khác"}
]
export default function CancelOrder() {
    const [show, setShow] = useState(false);  
    const [isDisable,setDisabled] = useState(true);  
    const [disableInput,setDisableInput] = useState(true);
    const [values,setValue] = useState({
      reasonCancel: ""
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const hanldeSubmit = (event) =>{
      event.preventDefault();
    }
    const inputChange = (event) =>{
      const target = event.target;
      const name = target.name;
      const value = target.value;
      console.log(value);
      setValue((values)=> ({
        ...values,
        [name] : event.target.value
      })
      );
      
      setDisabled(false);
      if(value === "")   {
        setDisabled(true);
      }
      if(value === "Khác"){
        setDisabled()
        setDisableInput(false)
      }else{
        setDisableInput(true)
      }
    }
    const textChange = (event) =>{
      const target = event.target;
      const name = target.name;
      const value = target.value;
      setValue((values)=> ({
        ...values,
        [name] : value
      })
      );
      setDisabled(false)
      if(value === ""){
        setDisabled(true)
      }
    }
    console.log(values);
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
              <Form noValidate className="FormCancelOrder" onSubmit={(event)=>hanldeSubmit(event)}>
                    <Form.Group controlId="formGridNumberPage">
                        <Form.Select name="id" onChange={(event)=>inputChange(event)}>
                          <option value="">Chọn lí do hủy đơn hàng</option>
                          {reasonCancel.map((value,key)=>{
                            return (                                
                              <option key={key} value={value.reason} >{value.reason}</option>                              
                            )
                          })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formGridNumberPage" className="mt-3">
                    <FloatingLabel controlId="floatingTextarea" label="Nhập lý do khác" className="mb-3">
                        <Form.Control as="textarea" disabled={disableInput} name="reasonCancel" onChange={(event)=>textChange(event)}/>
                    </FloatingLabel>
                    </Form.Group>
                    <div className="btnSubmit d-flex justify-content-end">
                      <Button variant="primary" type="submit" disabled={isDisable}>
                        Xác nhận hủy
                      </Button>
                    </div>
              </Form>
            </Modal.Body>
          </Modal>

        </>
      );
}
