import React from 'react';
import CardTable from '../CardTable';
import Header from '../Header';
const idTable = ["id","Tên sản phẩm","số lượng"];
const ManageProdct = () => {
    return (
        <div>
            <Header title="Quản lý sản phẩm"/>
            <CardTable title="Danh sách sản phẩm"/>
        </div>
    );
};

export default ManageProdct;