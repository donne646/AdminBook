import React,{useState} from 'react';

import Header from '../../../components/Header';
import ContentManageProduct from '../ContentManageProduct';
import ProductContext from "../../../Context/ProductContext/ProductContext";

const ManageProdct = () => {
    const [flag,setFlag] = useState();
    const handleEditFlag = () =>{
        setFlag("Edit")
    }
    const handleAddFlag = () =>{
        setFlag("Add")
    }
    return (
        <ProductContext.Provider value={{
            flag: flag,
            handleEditFlag : ()=>handleEditFlag(),
            handleAddFlag : ()=> handleAddFlag()
        }}>
            <div>
                <Header title="Quản lý sản phẩm"/>
                <ContentManageProduct/>
            </div>
        </ProductContext.Provider>
    );
};

export default ManageProdct;