import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router';
import Header from "../../../components/Header";
import ContentManageOrder from '../ContentManageOrder';
import OrderDetail from '../OrderDetail';

export default function ManageOrder() {
    const match = useRouteMatch();
    console.log(match.url+`/:id`)
    return (
        <div>
            <Switch>
                <Route path={match.url}>
                    <Header title="Quản lý đơn hàng"/>
                    <ContentManageOrder/>
                </Route>
                <Route path={match.url+`/:id`}>
                    <OrderDetail/>
                </Route>
            </Switch>
        </div>
    )
}
