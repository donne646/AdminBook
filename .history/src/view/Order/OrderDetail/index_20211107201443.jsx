import React from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router'

export default function OrderDetail() {
    const idOrder = useParams()
    return (
        <Card>
            <Card.Title>Chi tiết đơn hàng #{idOrder}</Card.Title>
        </Card>
    );
}
