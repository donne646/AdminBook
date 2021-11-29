import React,{useState} from 'react'
import Header from "../../../components/Header";
import ContentManagePublish from '../ContentManagePublish';
export default function ManagePublish() {
    const [flag,setFlag] = useState();

    return (

        <div>
             <Header title="Quản lý nhà xuất bản"/>
             <ContentManagePublish/>
        </div>
    )
}
