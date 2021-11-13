import React from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router'

export default function OrderDetail() {
    const idOrder = useParams()
    return (
        <>
        <Card>
            <Card.Body>
                <Card.Title>Chi tiết đơn hàng #{idOrder}</Card.Title>
                <label>ID đơn hàng </label>
                <p classname="txtID">Đơn hàng 1</p>
            </Card.Body>
        </Card>
        </>
    );
}
