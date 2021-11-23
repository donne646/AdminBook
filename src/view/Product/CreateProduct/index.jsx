import React,{useState} from 'react';
import {Card,Button, Form,Row,Col} from "react-bootstrap";
import { Upload } from 'antd';


export default function CreateProduct() {
    const [values,setValue] = useState();
    const [validated,setValidated] = useState(false);

    const handleEdit = (event) =>{
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);
    }
    const dummyRequest = ({ file, onSuccess }) => {
      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    };
    const handleUpload = (info) =>{
      console.log(info);

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
    }
    return (
      <>
            <Form noValidate validated={validated} className="FormEditProduct" onSubmit={(event)=>{handleEdit(event)}}>
                    <Row>
                        <Form.Group as={Col} controlId="formGridNameProduct">
                            <Form.Label>Tên sách</Form.Label>
                            <Form.Control type='text' name="namePoduct"   required onChange={(event)=>inputChange(event)}/>
                            <Form.Control.Feedback type="invalid">Vui lòng nhập tên sách</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formGridNameAuthor">
                            <Form.Label>Thể loại </Form.Label>
                            <Form.Select type='text' name="author" required onChange={(event)=>inputChange(event)}>
                              <option value="1">tác giả 1 </option>
                              <option value="2">tác giả 2 </option>
                              <option value="3">tác giả 3 </option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridNameCategory ">
                            <Form.Label>Thể loại </Form.Label>
                            <Form.Select type='select' name="category"   required onChange={(event)=>inputChange(event)}>
                              <option value=""></option>
                            </Form.Select>
                    </Form.Group>
                    <Row>
                        <Form.Group as={Col} controlId="formGridQuantity">
                            <Form.Label>Số lượng</Form.Label>
                            <Form.Control type='number' name="quantity"   required onChange={(event)=>inputChange(event)}/>
                            <Form.Control.Feedback type="invalid">Vui lòng nhập số lượng hợp lệ</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Đơn giá</Form.Label>
                            <Form.Control type='number' name="price"   required onChange={(event)=>inputChange(event)}/>
                            <Form.Control.Feedback type="invalid">Vui lòng nhập đơn giá hợp lệ</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridNumberPage">
                            <Form.Label>Số trang</Form.Label>
                            <Form.Control type='number' name="numberPage"  min="1" max="10000" required onChange={(event)=>inputChange(event)}/>
                            <Form.Control.Feedback type="invalid">Vui lòng số trang hợp lệ</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="uploadImage">
                      
                        <Upload
                          listType="picture"
                          onChange={handleUpload}
                          customRequest={dummyRequest}
                          maxCount={5}
                          accept="image/.jpg,image/.png*"
                        >
                          <Button >
                             Chọn ảnh 
                          </Button>
                          <Form.Label className="m-3 h6">Chọn tối đa 5 ảnh (Định dạng jpg,png vd: sagologo.png)</Form.Label>
                        </Upload>
                        
                    </Form.Group>
                    <div className="btnSubmit d-flex justify-content-end">
                          <Button variant="success" type="submit">
                              Thêm sản phẩm
                          </Button>
                    </div>
            </Form>
      </>
    );
  }