import React from 'react'
import { Table } from 'react-bootstrap'
export default function CardTable(props) {
    return (
        <div className="cardTable">
            <div className="cardTable__title">
                <h5>{props.title}</h5>
            </div>
            <div className="cardTable__content">
                <Table>
                    <thead>
                        <tr>                  
                        {props.titleTable.map((data,key)=>{
                            return (
                              <th>{data}</th>  
                            );
                        })}
                        </tr>
                    </thead>
                </Table>
            </div>
        </div>
    )
}
