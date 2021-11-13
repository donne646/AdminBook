import React from 'react';
import { Accordion,Table } from 'react-bootstrap';
const headerTableAll = ["ID đơn hàng","Tên người dùng","Số điện thoại","Tổng tiền","Chi tiết"];
const headerTable = ["ID đơn hàng","Tên người dùng","Số điện thoại","Tổng tiền","Chi tiết","Hủy","Xác nhận"];

export default function ContentManageOrder() {
    return (
        <div className="ContentManageOrder">
            <Accordion defaultActiveKey="0" className="ContentManageUser__accordion">
                {/* Orders all */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Danh sách đơn hàng</Accordion.Header>
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
                {/* Orders waiting comfirm */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Đơn hàng chờ xác nhận</Accordion.Header>
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
                {/* Orders prepare product */}
                <Accordion.Item eventKey="2">
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
                               
                            </tbody>
                        </Table>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
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
                               
                            </tbody>
                        </Table>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
