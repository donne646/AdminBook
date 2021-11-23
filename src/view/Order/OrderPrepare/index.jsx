import React from 'react'
import { Table,Button } from 'react-bootstrap';

import {useRouteMatch,useHistory } from 'react-router-dom';
import CancelOrder from '../CancelOrrder';
let headerTable = ["ID đơn hàng","Tên người dùng","Số điện thoại","Tổng tiền","Chi tiết","Hủy","Xác nhận"];
let testDataOrders = [
    {ID : 1,fullname: "Nguyễn Hữu Nhân"},
    {ID : 1,fullname: "Nguyễn Hữu Nhân"},
    {ID : 1,fullname: "Nguyễn Hữu Nhân"}
];
export default function OrderPrepare() {
    const match = useRouteMatch();
    const history = useHistory();
    const handleSeeDetail = (data)=>{
        history.push(`${match.url}/${data.ID}`)
    }
    const handleConfirm = () =>{

    }
    return (
        <div className="cardTable table-wrapper-scroll-y my-custom-scrollbar" >
                        <Table >
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
                                {testDataOrders.map((data,key)=>{
                                        return (
                                            <tr key={key}>
                                                <td>{data.ID}</td>
                                                <td>{data.fullname}</td>
                                                <td><Button variant="secondary" onClick={()=>handleSeeDetail(data)}>Xem chi tiết</Button></td>
                                                <td><CancelOrder/></td>
                                                <td><Button variant="success" onClick={()=>handleConfirm(data)}>Xác nhận</Button></td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </Table>
                    </div>
    )
}
