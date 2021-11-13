import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';

const headerTable = ["id","Tên nhà xuất bản","Sửa"];
const 
export default function ContentManageUser() {
    const [dataUser,setDataUser] = useState([]);
    useEffect(() => {
        setDataUser()
    }, [])
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
                                {dataUser.map((data,key)=>{
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
