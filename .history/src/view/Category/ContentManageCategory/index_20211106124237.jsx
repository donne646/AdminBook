
import axios from 'axios';
import React,{useState,useEffect,useContext} from 'react'
import { Accordion,Form,Col,Row,Button,Table} from 'react-bootstrap';
import CategoryContext from '../../../Context/CategoryContext/CategoryContent';
import ModalEditCategory from '../ModalEditCategory';
const headerTable = ["id","Tên thể loại","Sửa"];
const testdataCategory = [
    {id : 1, nameCategory: "Trinh Thám"},
    {id : 2, nameCategory: "Thiếu Nhi"},
    {id : 3, nameCategory: "Tiểu Thuyết"},
    {id : 4, nameCategory: "Giáo trình"},
];
export default function ContentManageCategory() {
    const [dataCategory,setDataCategory] = useState([]);
    const [values,setValue] = useState({
        nameCategoryValue: ""
    });
    const [validated,setValidated] = useState(false);
    const CateContext= useContext(CategoryContext)
    useEffect(() => {
        setDataCategory(testdataCategory);
        CateContext.handeEdit();
    }, []);
    console.log(CateContext)
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
        <div className="ContentManageCategory">
            <Accordion defaultActiveKey="0" className="ContentManageCategory__accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Danh sách thể loại</Accordion.Header>
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
                                {dataCategory.map((data,key)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{data.id}</td>
                                            <td>{data.nameCategory}</td>
                                            <td><ModalEditCategory dataModal={data}/></td>
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
                        <Form noValidate validated={validated} onSubmit={(event)=>submitFormAdd(event)} className="FormAddCate">
                            <Row>
                                <Form.Group as={Col} controlId="formGridNameCategory">
                                    <Form.Label>Tên thể loại</Form.Label>
                                    <Form.Control type='text' name="nameCategory" required onChange={(event)=>inputChange(event)}/>
                                    <Form.Control.Feedback type="invalid">Vui lòng nhập tên thể loại</Form.Control.Feedback>
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

