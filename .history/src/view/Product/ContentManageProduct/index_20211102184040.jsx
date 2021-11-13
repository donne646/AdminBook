import React from 'react'
import { Accordion } from 'react-bootstrap';
const headerTable = ["id","Tên sách","Số lượng","Đơn giá","Tác giả","Số trang"];
export default function ContentManageProduct() {
    return (
        <div className="ContentManageProduct">
            <Accordion defaultActiveKey="0" className="ContentManageProduct__accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Danh sách sản phẩm</Accordion.Header>
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
                                    
                                </tbody>
                            </Table>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Thêm sản phẩm</Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
