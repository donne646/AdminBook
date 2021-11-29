import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Table,Button } from 'react-bootstrap';

import {useRouteMatch,useHistory } from 'react-router-dom';
import CancelOrder from '../CancelOrrder';
let headerTable = ["ID đơn hàng","Tên người dùng","Số điện thoại","Tổng tiền","Chi tiết","Xác nhận"];
let testDataOrders = [
    {ID : 1,fullname: "Nguyễn Hữu Nhân"},
    {ID : 1,fullname: "Nguyễn Hữu Nhân"},
    {ID : 1,fullname: "Nguyễn Hữu Nhân"}
];
export default function OrderTranport({flag,handleEdit}) {
    const match = useRouteMatch();
    const [orders,setOrders] = useState([])
    const history = useHistory();
    const handleSeeDetail = (id)=>{
        history.push(`${match.url}/${id}`)
    }
    const handleConfirm = async (id) =>{
        const status = {
            status : 4
        }
        const response = await axios.patch("http://localhost:5000/orders/"+id,status)
        alert(response.data.Message);
        handleEdit()
    }
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await axios.get("http://localhost:5000/orders?status=3")
            setOrders(response.data);
        }
        fetchData();
    },[flag])
    const formatCash= (str) =>{
        let text = String(str);
        return text.split('').reverse().reduce((prev, next, index) => {
          return ((index % 3) ? next : (next + ',')) + prev
        })
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
                                {orders.map((order,key)=>{
                                        return (
                                            <tr key={key}>
                                                <td>{order._id}</td>
                                                <td>{order.customer}</td>
                                                <td>{order.phone}</td>
                                                <td>{formatCash(order.grandTotal)}</td>
                                                <td><Button variant="secondary" onClick={()=>handleSeeDetail(order._id)}><i class="fa fa-eye"></i></Button></td>
                                                <td><Button variant="success" onClick={()=>handleConfirm(order._id)}><i class="fa fa-check"></i></Button></td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </Table>
                    </div>
    )
}
