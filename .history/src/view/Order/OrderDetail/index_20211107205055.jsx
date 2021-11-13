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
                        <label  >ID đơn hàng : </label>
                        <p >Đơn hàng số 1</p>
                    </div>
                    <div className="cardOrderDetail__rowDetail">
                        <label>Tên người nhận hàng: </label>
                        <p >Nguyễn Hữu Nhân</p>
                    </div>
                    <div className="cardOrderDetail__rowDetail">
                        <label  >Số điện thoại: </label>
                        <p >0123456789</p>
                    </div>
                    <div className="cardOrderDetail__rowDetail">
                        <label  >Địa chỉ: </label>
                        <p >273 An D. Vương, Phường 3, Quận 5, Thành phố Hồ Chí Minh</p>
                    </div>
                    <div className="cardOrderDetail__rowDetail">
                        <label  >ID đơn hàng : </label>
                        <p >Đơn hàng số 1</p>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}
