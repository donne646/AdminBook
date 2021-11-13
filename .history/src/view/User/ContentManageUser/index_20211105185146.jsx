import React from 'react'

export default function ContentManageUser() {
    return (
        <div>
            <div className="cardTable">
                        <Table>
                            <thead>
                                <tr>                  
                                {headerTable.map((data,key)=>{
                                    return (
                                    <th key={key}>{data}</th>  
                                    );
                                })}
                                </tr>
                            </thead>
                            <tbody>
                                {dataPublish.map((data,key)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{data.id}</td>
                                            <td>{data.namePublish}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
        </div>
    )
}
