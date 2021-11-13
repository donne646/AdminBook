import React from 'react'
import { Route, Switch, useParams } from 'react-router'

export default function OrderDetail() {
    const test = useParams()
    console.log(test)
    return (
        <div>
            hello
        </div>
    );
}
