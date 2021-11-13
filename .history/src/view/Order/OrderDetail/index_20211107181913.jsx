import React from 'react'
import { Route, Switch, useHistory } from 'react-router'

export default function OrderDetail(props) {
    let history = useHistory();

    function handleClick() {
        history.push("/Orders/"+{data.ID});
    }

    return (
        <button type="button" onClick={handleClick}>
        Go home
        </button>
    );
}
