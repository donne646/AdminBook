import React from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router'

export default function OrderDetail() {
    const idOrder = useParams();
    console.log(idOrder)
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Chi tiết đơn hàng #</Card.Title>
                    <label>ID đơn hàng </label>
                    <p classname="txtID">Đơn hàng 1</p>
                </Card.Body>
            </Card>
        </>
    );
}
