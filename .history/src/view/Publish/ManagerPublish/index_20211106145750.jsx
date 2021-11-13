import React from 'react'
import Header from "../../../components/Header";
import ContentManagePublish from '../ContentManagePublish';
import ProductContext from "../../../Context/ProductContext/ProductContext";
export default function ManagePublish() {
    return (
        <div>
             <Header title="Quản lý nhà xuất bản"/>
             <ContentManagePublish/>
        </div>
    )
}
