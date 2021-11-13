
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Accordion,Form,Col,Row,Button,Table} from 'react-bootstrap';
import ModalEditPublish from '../ModalEditPublish';
const headerTable = ["id","Tên nhà xuất bản","Sửa"];
const testDataPublish = [
    {id:1 , namePublish: "NXB trẻ"}
]
export default function ContentManagePublish() {
    const [dataPublish,setDataPublish] = useState([]);
    const [values,setValue] = useState({
        namePublishValue: ""
    });
    const [validated,setValidated] = useState(false);

    useEffect(() => {
        setDataPublish(testDataPublish);
    }, []);

    const submitFormAdd = (event)=>{
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
        console.log(values);
    }

    return (
        <div className="ContentManagePublish">
            <Accordion defaultActiveKey="0" className="ContentManagePublish__accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Danh sách nhà xuất bản</Accordion.Header>
                    <Accordion.Body>
                    <div className="cardTable">
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
                                {dataPublish.map((data,key)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{data.id}</td>
                                            <td>{data.namePublish}</td>
                                            <td><ModalEditPublish dataModal={data}/></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Thêm thể loại</Accordion.Header>
                    <Accordion.Body>
                        <Form noValidate validated={validated} onSubmit={(event)=>submitFormAdd(event)} className="FormAddPublish">
                            <Row>
                                <Form.Group as={Col} controlId="formGridNamePublish">
                                    <Form.Label>Tên nhà xuất bản</Form.Label>
                                    <Form.Control type='text' name="namePublish" required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập tên nhà xuất bản</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <div className="btnSubmit">
                                <Button variant="primary" type="submit">
                                    Thêm thể loại
                                </Button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

