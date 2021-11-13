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
                    <div className="row cardOrderDetail__rowDetail">
                        <label className="col-xl-4 cardOrderDetail__rowDetail--labelDetail">ID đơn hàng : </label>
                        <p className="col-xl-8 cardOrderDetail__rowDetail--contentDetail">Đơn hàng số 1</p>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}
