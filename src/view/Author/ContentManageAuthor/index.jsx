import React, { useState,useEffect } from 'react'
import { Accordion,Table,Form,Button,Row,Col } from 'react-bootstrap';
import ModalEditAuthor from "../ModalEditAuthor";
let headerTable = ["id","Mã khuyến mãi","Sửa"];
let testdataAuthor = [
    {id : 1, name: "Nguyễn Nhật Ánh"},
];
export default function ContentManageAuthor() {
    const [dataAuthor,setDataVoucher] = useState([]);
    const [validated,setValidated] = useState(false);
    const [values,setValue] = useState({
        name: ""
    });

    useEffect(() => {
        setDataVoucher(testdataAuthor)
    }, [])
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
                    <Accordion.Header>Danh sách tác giả</Accordion.Header>
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
                                {dataAuthor.map((data,key)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{data.id}</td>
                                            <td>{data.name}</td>
                                            <td><ModalEditAuthor dataModal={data}/></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Thêm tác giả</Accordion.Header>
                    <Accordion.Body>
                        <Form noValidate validated={validated} onSubmit={(event)=>submitFormAdd(event)} className="FormAddVoucher">
                            <Row>
                                <Form.Group as={Col} controlId="formGridNameAuthor">
                                    <Form.Label>Tên tác giả</Form.Label>
                                    <Form.Control type='text' name="name" required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập tên tác giả</Form.Control.Feedback>
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
