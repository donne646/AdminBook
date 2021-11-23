import React from 'react';
import { Accordion,Table} from 'react-bootstrap';
import { useRouteMatch,useHistory } from 'react-router-dom';
import OrderConfirm from '../OrderConfirm';
import OrderDelivered from '../OrderDelivered';
import OrderPrepare from '../OrderPrepare';
import OrderTranport from '../OrderTranport';
export default function ContentManageOrder() {
    return (
        <div className="ContentManageOrder">
            <Accordion defaultActiveKey="0" className="ContentManageUser__accordion">
                {/* Orders waiting comfirm */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Đơn hàng chờ xác nhận</Accordion.Header>
                    <Accordion.Body>
                        <OrderConfirm/>
                    </Accordion.Body>
                </Accordion.Item>
                {/* Orders prepare product */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Đang chuẩn bị hàng</Accordion.Header>
                    <Accordion.Body>
                        <OrderPrepare/>
                    </Accordion.Body>
                </Accordion.Item>
                {/* Orders transport*/}
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Đơn hàng đã giao cho bên vận chuyển</Accordion.Header>
                    <Accordion.Body>
                        <OrderTranport/>
                    </Accordion.Body>
                </Accordion.Item>
                {/* Orders Delivered */}
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Đơn hàng đã giao hàng thành công</Accordion.Header>
                    <Accordion.Body>    
                        <OrderDelivered/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
