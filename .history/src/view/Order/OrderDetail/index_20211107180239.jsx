import React from 'react'
import { Route, Switch } from 'react-router'

export default function OrderDetail(props) {
    return (
        <Route path={`/Orders/`+props.idOrder}>
            Hellor
        </Route>
    )
}
