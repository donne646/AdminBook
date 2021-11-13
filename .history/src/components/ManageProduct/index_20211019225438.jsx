import React from 'react';
import CardTable from '../CardTable';
import Header from '../Header';
import { Accordion } from 'react-bootstrap';
const titleTable = ["id","Tên sản phẩm","số lượng"];
const ManageProdct = () => {
    return (
        <div>
            <Header title="Quản lý sản phẩm"/>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Test
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default ManageProdct;