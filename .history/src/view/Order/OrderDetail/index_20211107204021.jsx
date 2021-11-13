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
                    <div className="cardOrderDetail__rowDetail">
                        <label className="cardOrderDetail__rowDetail--labelDetail">ID đơn hàng : </label>
                        <p className="cardOrderDetail__rowDetail--contentDetail">Đơn hàng số 1</p>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}
