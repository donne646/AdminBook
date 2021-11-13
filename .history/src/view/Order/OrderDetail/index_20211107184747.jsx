import React from 'react'
import { Route, Switch, useHistory } from 'react-router'

export default function OrderDetail(props) {
    return (
        <>
            <Route path={`/Orders/`+props.idOrder}>
                Hello
            </Route>
        </>
    );
}
