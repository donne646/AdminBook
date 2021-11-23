import React,{useState} from 'react';
import {Card,Button, Form,Row,Col,FormControl} from "react-bootstrap";
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useParams } from 'react-router';
const imageTest = [
  {
    name: "xxx.png",
    url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  }
]

export default function EditProduct() {
    const [testCheck,setCheck] = useState(true);
    const idProduct = useParams();
    const [values,setValue] = useState();
    const [isDisable,setDisabled] = useState(true);
    const [validated,setValidated] = useState(false);

    const handleEdit = (event) =>{
      event.preventDefault();
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
      setDisabled(false);
      if(value === "") {
        setDisabled(true);
      }
    }
    return (
      <>
      <Card className="cardEditProduct mt-5">
          <Card.Body>
              <Card.Title>Chi tiết sản phẩm #{idProduct.id}</Card.Title>
            <Form noValidate validated={validated} className="FormEditProduct" onSubmit={(event)=>{handleEdit(event)}}>
                    <Row>
                        <Form.Group as={Col} controlId="formGridId">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type='text' name="idProdct"   readOnly required/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridNameProduct">
                            <Form.Label>Tên sách</Form.Label>
                            <Form.Control type='text' name="namePoduct"   required onChange={(event)=>inputChange(event)}/>
                            <Form.Control.Feedback type="invalid">Vui lòng nhập tên sách</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
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
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridQuantity">
                            <Form.Label>Số lượng</Form.Label>
                            <Form.Control type='number' name="quantity"   required onChange={(event)=>inputChange(event)}/>
                            <Form.Control.Feedback type="invalid">Vui lòng nhập số lượng</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Đơn giá</Form.Label>
                            <Form.Control type='number' name="price"   required onChange={(event)=>inputChange(event)}/>
                            <Form.Control.Feedback type="invalid">Vui lòng nhập đơn giá</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridNumberPage">
                            <Form.Label>Số trang</Form.Label>
                            <Form.Control type='number' name="numberPage"   required onChange={(event)=>inputChange(event)}/>
                            <Form.Control.Feedback type="invalid">Vui lòng số trang</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    
                    <Form.Group className="uploadImage">
                      
                        <Upload
                          defaultFileList={[...imageTest]}
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
                          <Button variant="primary" type="submit" disabled={isDisable}>
                              Lưu
                          </Button>
                    </div>
            </Form>
        </Card.Body>
      </Card>
      </>
    );
  }