import React,{useState,useEffect,useContext} from 'react';
import { Table,Accordion } from 'react-bootstrap';
import CategoryContext from '../../../Context/CategoryContext/CategoryContent';
const headerTable = ["id","User name"];
const testDataUser = [
    {id: 1, userName: "Huunhan887"}
]
export default function ContentManageUser() {
    const [dataUser,setDataUser] = useState([]);
    const flag = useContext(CategoryContext);
    useEffect(() => {
        setDataUser(testDataUser);
        console.log(flag)
    }, [])
    return (
        <div className="ContentManageUser">
            <Accordion defaultActiveKey="0" className="ContentManageUser__accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Danh sách thể loại</Accordion.Header>
                    <Accordion.Body>
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
                                            <td>{data.userName}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
