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
                    <h4>ID đơn hàng </h4>
                    <p classname="txtID">Đơn hàng 1</p>
                </Card.Body>
            </Card>
        </>
    );
}
