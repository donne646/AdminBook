import React,{useState} from 'react';
import {Modal,Button,Form,Row,Col} from "react-bootstrap";
export default function ModalEditProduct(props) {
    const [show, setShow] = useState(false);  
    const [values,setValue] = useState({
        
    });
    const [isDisable,setDisabled] = useState(true);
    const [validated,setValidated] = useState(false);
    const handleClose = () => setShow(false);
        
    const handleShow = () => setShow(true);
    const handleEdit = (event) =>{
        
    }
    const inputChange = (event) =>{
      const target = event.target;
      const name = target.name;
      const value = target.value;
      setValue((values)=> ({
        ...values,
        [name] : value
      })
      );
      setDisabled(false);
      if(value === "") {
        setDisabled(true);
      } 
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Chi tiết sản phẩm
        </Button>
        <Modal show={show} onHide={handleClose} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Sửa thể loại</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <Form noValidate validated={validated} className="FormEditProduct" onSubmit={(event)=>{handleEdit(event)}}>
                            <Row>
                                <Form.Group as={Col} controlId="formGridId">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type='text' name="idProdct" defaultValue={props.dataModal.id} readOnly required/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridNameProduct">
                                    <Form.Label>Tên sách</Form.Label>
                                    <Form.Control type='text' name="namePoduct" defaultValue={props.dataModal.nameProduct} required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập tên sách</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group as={Col} controlId="formGridNameAuthor">
                                    <Form.Label>Tên tác giả</Form.Label>
                                    <Form.Control type='text' name="author" defaultValue={props.dataModal.author} required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập tên tác giả</Form.Control.Feedback>
                                </Form.Group>
                            <Row>
                                <Form.Group as={Col} controlId="formGridQuantity">
                                    <Form.Label>Số lượng</Form.Label>
                                    <Form.Control type='number' name="quantity" defaultValue={props.dataModal.quantity} required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập số lượng</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <Form.Label>Đơn giá</Form.Label>
                                    <Form.Control type='number' name="price" defaultValue={props.dataModal.price} required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập đơn giá</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <Form.Label>Đơn giá</Form.Label>
                                    <Form.Control type='number' name="price" defaultValue={props.dataModal.price} required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập đơn giá</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <div className="btnSubmit d-flex justify-content-end">
                                  <Button variant="primary" type="submit" disabled={isDisable}>
                                      Lưu
                                  </Button>
                            </div>
                    </Form>
          </Modal.Body>
          
        </Modal>
      </>
    );
  }