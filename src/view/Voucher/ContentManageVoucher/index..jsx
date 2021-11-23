import React,{useState,useEffect} from 'react'

import { Accordion,Form,Col,Row,Button,Table} from 'react-bootstrap';
import ModalEditVoucher from '../ModalEditVoucher';
let headerTable = ["id","Mã khuyến mãi","Giảm","Số lượng","Sửa"];
let testdataVoucher = [
    {id : 1, name: "KHUYENMAITHANG11",discount: "200000",quantity: "100"},
];
export default function ContentManageVoucher() {
    const [dataVoucher,setDataVoucher] = useState([]);
    const [validated,setValidated] = useState(false);
    const [values,setValue] = useState({
        name: ""
    });
    useEffect(()=>{
        setDataVoucher(testdataVoucher)
    },[])
    const submitFormAdd = (event)=>{
        const form = event.currentTarget;
        event.preventDefault();
        setValidated(true);
    };

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
        <div className="ContentManageVoucher">
            <Accordion defaultActiveKey="0" className="ContentManageVoucher__accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Danh sách mã khuyến mãi</Accordion.Header>
                    <Accordion.Body>
                    <div className="cardTable table-wrapper-scroll-y my-custom-scrollbar">
                        <Table>
                            <thead>
                                <tr>                  
                                {headerTable.map((data,key)=>{
                                    return (
                                    <th key={key}>{data}</th>  
                                    );
                                })}
                                </tr>
                            </thead>
                            <tbody>
                                {dataVoucher.map((data,key)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.discount}</td>
                                            <td>{data.quantity}</td>
                                            <td><ModalEditVoucher dataModal={data}/></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Thêm mã khuyến mãi</Accordion.Header>
                    <Accordion.Body>
                        <Form noValidate validated={validated} onSubmit={(event)=>submitFormAdd(event)} className="FormAddVoucher">
                            <Row>
                                <Form.Group as={Col} controlId="formGridNameVoucher">
                                    <Form.Label>Mã khuyến mãi</Form.Label>
                                    <Form.Control type='text' name="name" required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập mã khuyến mãi</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formGridDiscountVoucher">
                                    <Form.Label>Giảm giá</Form.Label>
                                    <Form.Control type='number' name="discount" required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng giảm giá</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridQuantityVoucher">
                                    <Form.Label>Số lượng</Form.Label>
                                    <Form.Control type='number' name="quantity" required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập số lượng</Form.Control.Feedback>
                                </Form.Group>
                                
                            </Row>
                            <div className="btnSubmit">
                                <Button variant="success" type="submit">
                                    Thêm
                                </Button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
