import React,{useState} from 'react'
import { Accordion,Form,Col,Row,Button } from 'react-bootstrap';
import CardTable from '../../../components/CardTable';
const headerTable = ["id","Tên thể loại"];
const dataCategory = [
    {id : 1, tenTheLoai: "Trinh Thám"},
    {id : 2, tenTheLoai: "Thiếu Nhi"},
    {id : 3, tenTheLoai: "Tiểu Thuyết"},
    {id : 4, tenTheLoai: "Giáo trình"},
];
export default function ContentManageCategory() {
    const [validated,setValidated] = useState(false);
    const getLast = ()=>{
        return dataCategory[dataCategory.length-1].id;
    };
    const submitFormAdd = (event)=>{
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
        }
        setValidated(true);
    }
    return (
        <div className="ContentManageProduct">
            <Accordion defaultActiveKey="0" className="ContentManageProduct__accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Danh sách thể loại</Accordion.Header>
                    <Accordion.Body>
                        <CardTable headerTable = {headerTable} data={dataCategory}/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Thêm thể loại</Accordion.Header>
                    <Accordion.Body>
                        <Form noValidate validated={validated} onSubmit={(event)=>submitFormAdd(event)}>
                            <Row>
                                <Form.Group as={Col} controlId="formGridId">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type='text' name="idCategory" value={getLast()+1} disabled required/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridNameCategory">
                                    <Form.Label>Tên thể loại</Form.Label>
                                    <Form.Control type='text' name="nameCategory" required/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập tên thể loại</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit" className="submitFormAdd">
                                Thêm thể loại
                            </Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
