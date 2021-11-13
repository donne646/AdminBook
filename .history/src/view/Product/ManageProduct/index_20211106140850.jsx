import React,{useState} from 'react';

import Header from '../../../components/Header';
import ContentManageProduct from '../ContentManageProduct';
import ProductContext from "../../../Context/ProductContext/ProductContext";

const ManageProdct = () => {
    const [flag,setFlag] = useState();
    const handeEditFlag = () =>{
        setFlag("Edit")
    }
    const handleAddFlag = () =>{
        setFlag("Add")
    }
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