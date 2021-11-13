import React from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router'

export default function OrderDetail() {
    const test = useParams()
    console.log(test)
    return (
        <Card>

        </Card>
    );
}
