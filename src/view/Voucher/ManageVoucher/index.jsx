import React,{useState} from 'react';
import Header from "../../../components/Header";
import ContentManageVoucher from '../ContentManageVoucher/index.';
const ManageVoucher = () => {

    return (
    
            <div>
            <Header title="Quản lý mã khuyến mãi"/>
            <ContentManageVoucher/>
            </div>
    );
};

export default ManageVoucher;