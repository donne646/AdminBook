import React from 'react';
import { Accordion,Table,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrderDetail from '../OrderDetail';
const headerTableAll = ["ID đơn hàng","Tên người dùng","Số điện thoại","Tổng tiền","Chi tiết"];
const headerTable = ["ID đơn hàng","Tên người dùng","Số điện thoại","Tổng tiền","Chi tiết","Hủy","Xác nhận"];
const testDataOrders = [
    {id : 1}
]
export default function ContentManageOrder() {
    return (
        <div className="ContentManageOrder">
            <Accordion defaultActiveKey="0" className="ContentManageUser__accordion">
                {/* Orders waiting comfirm */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Đơn hàng chờ xác nhận</Accordion.Header>
                    <Accordion.Body>
                    <div className="cardTable">
                        <Table>
                            <thead>
                                <tr>                  
                                {headerTableAll.map((data,key)=>{
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
                {/* Orders prepare product */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Đang chuẩn bị hàng</Accordion.Header>
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
                                {testDataOrders.map((key,data)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{data.id}</td>
                                            <td><Button>Chi tiết<Link to={'Orders/'+data.id}><OrderDetail id={data.id}/></Link></Button></td>
                                        </tr>
                                    )
                                })}
                               
                            </tbody>
                        </Table>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                {/* Orders transport*/}
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Đơn hàng đã giao cho bên vận chuyển</Accordion.Header>
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
            </Accordion>
        </div>
    )
}
