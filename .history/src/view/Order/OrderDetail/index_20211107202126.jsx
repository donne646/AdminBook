import React from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router'

export default function OrderDetail() {
    const idOrder = useParams();
    console.log(idOrder)
    return (
        <>
            <Card className="cardOrderDetail">
                <Card.Body>
                    <Card.Title>Chi tiết đơn hàng #{idOrder.id}</Card.Title>
                    <label>ID đơn hàng </label>
                    <p classname="txtID">Đơn hàng 1</p>
                </Card.Body>
            </Card>
        </>
    );
}
