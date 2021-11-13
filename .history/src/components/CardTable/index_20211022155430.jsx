import React from 'react'
import { Table } from 'react-bootstrap'
export default function CardTable(props) {
    return (
            <div className="cardTable">
                <Table>
                    <thead>
                        <tr>                  
                        {props.headerTable.map((data)=>{
                            return (
                              <th>{data}</th>  
                            );
                        })}
                        </tr>
                    </thead>
                </Table>
            </div>
    )
}
