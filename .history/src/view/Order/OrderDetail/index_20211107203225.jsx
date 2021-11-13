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
                    <div className="row rowDetail">
                        <label className="col-xl-4 labelDetail">ID đơn hàng : </label>
                        <p className="col-xl-8 contentDetail"></p>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}
