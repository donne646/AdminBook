import React from 'react'
import { Accordion } from 'react-bootstrap';
import CardTable from '../../../components/CardTable';
const headerTable = ["id","Tên thể loại"];
const dataCategory = [
    {id : 1, tenTheLoai: "Trinh Thám"},
    {id : 2, tenTheLoai: "Thiếu Nhi"},
    {id : 3, tenTheLoai: "Tiểu Thuyết"},
    {id : 4, tenTheLoai: "Giáo trình"},
    
];
export default function ContentManageCategory() {
    return (
        <div className="ContentManageProduct">
            <Accordion defaultActiveKey="0" className="ContentManageProduct__accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Danh sách thể loại</Accordion.Header>
                    <Accordion.Body>
                        <CardTable headerTable = {headerTable}/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Thêm thể loại</Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
