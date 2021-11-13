import React from 'react';

import Header from '../../../components/Header';
import ContentManageProduct from '../ContentManageProduct';
import ProductContext from "../../../Context/ProductContext/ProductContext";

const ManageProdct = () => {
    const [flag,setFlag] = useState();

    return (
        <ProductContext.Provider value={{flag: flag}}>
            <div>
                <Header title="Quản lý sản phẩm"/>
                <ContentManageProduct/>
            </div>
        </ProductContext.Provider>
    );
};

export default ManageProdct;