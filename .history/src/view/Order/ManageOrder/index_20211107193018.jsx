import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router';
import Header from "../../../components/Header";
import ContentManageOrder from '../ContentManageOrder';

export default function ManageOrder() {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route>
                    <Header title="Quản lý đơn hàng"/>
                    <ContentManageOrder/>
            </Route>
            </Switch>
        </div>
    )
}
