import React,{useState} from 'react';
import Header from "../../../components/Header";
import ContentManageCategory from '../ContentManageCategory';
import CategoryContext from '../../../Context/CategoryContext/CategoryContent';
const ManageCategory = () => {
    const [flag,setFlag] = useState();
    const handleAdd = () =>{
        setFlag("Add");
    }
    const handleEdit = () =>{
        setFlag("Edit");
    }
    return (
        <CategoryContext.Provider value={{flag : flag,handleEdit: ()=>handleEdit()},handleAdd: ()=>handleAdd()}}>
            <div>
            <Header title="Quản lý thể loại"/>
            <ContentManageCategory/>
            </div>
        </CategoryContext.Provider>
    );
};

export default ManageCategory;