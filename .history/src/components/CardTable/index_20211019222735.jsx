import React from 'react'
export default function CardTable(props) {
    return (
        <div className="cardTable">
            <div className="cardTable__title">
                <h5>{props.title}</h5>
            </div>
            <div className="cardTable__content">
            </div>
        </div>
    )
}
