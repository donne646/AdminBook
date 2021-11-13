import React,{useState,useContext} from 'react';
import {Modal,Button,Form,Row,Col} from "react-bootstrap";
import CategoryContext from '../../../Context/CategoryContext/CategoryContent';
export default function ModalEditCategory(props) {
    const [show, setShow] = useState(false);  
    const [values,setValue] = useState(props.dataModal);
    const [isDisable,setDisabled] = useState(true);
    const [validated,setValidated] = useState(false);
    const CateContext = useContext(CategoryContext)



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleEdit = (event) =>{
        event.preventDefault();
        // Post server
        alert("Lưu thành công");
        handleClose();
    }

    const inputChange = (event) =>{
      setValidated(true);
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
          Sửa
        </Button>
        <Modal show={show} onHide={handleClose} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Sửa thể loại</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <Form noValidate validated={validated} className="FormEditCate" onSubmit={(event)=>handleEdit(event)}>
                            <Row>
                                <Form.Group as={Col} controlId="formGridId">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type='text' name="idCategory" defaultValue={props.dataModal.id} readOnly required/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridNameCategory">
                                    <Form.Label>Tên thể loại</Form.Label>
                                    <Form.Control type='text' name="nameCategory" defaultValue={props.dataModal.nameCategory} required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập tên thể loại</Form.Control.Feedback>
                                </Form.Group>
                                <div className="btnSubmit d-flex justify-content-end">
                                  <Button variant="primary" type="submit" disabled={isDisable}>
                                      Lưu
                                  </Button>
                                </div>
                            </Row>
                    </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }