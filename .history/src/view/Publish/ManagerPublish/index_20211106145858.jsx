import React,{useState} from 'react'
import Header from "../../../components/Header";
import ContentManagePublish from '../ContentManagePublish';
import ProductContext from "../../../Context/ProductContext/ProductContext";
export default function ManagePublish() {
    const [flag,setFlag] = useState();
    const handleAddFlag = () =>{
        setFlag("Add");
    }
    const handleEditFlag = () =>{
        setFlag("Edit");
    }
    return (
        <ProductContext.Provider value={{
            flag : flag,
            handleEdit: ()=>handleEditFlag(),
            handleAdd: ()=>handleAddFlag()
        }}>
        <div>
             <Header title="Quản lý nhà xuất bản"/>
             <ContentManagePublish/>
        </div>
        </ProductContext.Provider>
    )
}
