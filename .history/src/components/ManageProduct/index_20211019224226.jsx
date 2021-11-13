import React from 'react';
import CardTable from '../CardTable';
import Header from '../Header';
const titleTable = ["id","Tên sản phẩm","số lượng"];
const ManageProdct = () => {
    return (
        <div>
            <Header title="Quản lý sản phẩm"/>
            <CardTable title="Danh sách sản phẩm" titleTable={titleTable}/>
        </div>
    );
};

export default ManageProdct;