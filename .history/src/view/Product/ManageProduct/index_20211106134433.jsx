import React from 'react';

import Header from '../../../components/Header';
import ContentManageProduct from '../ContentManageProduct';
import ProductContext from "../../../Context/ProductContext/ProductContext";

const ManageProdct = () => {
    return (
        <div>
            <Header title="Quản lý sản phẩm"/>
            <ContentManageProduct/>
        </div>
    );
};

export default ManageProdct;