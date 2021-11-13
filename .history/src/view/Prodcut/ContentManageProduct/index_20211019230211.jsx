import React from 'react'
import { Accordion } from 'react-bootstrap';
import CardTable from '../../../components/CardTable';
export default function ContentManageProduct() {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Test
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
