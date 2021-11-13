import React,{useState} from 'react';
import Header from "../../../components/Header";
import ContentManageCategory from '../ContentManageCategory';
import CategoryContext from '../../../Context/CategoryContext/CategoryContent';
const ManageCategory = () => {
    const [flag,setFlag] = useState(true);
    const handleEdit = () =>{
        setFlag(false);
    }
    return (
        <CategoryContext.Provider value={{flag : flag}}>
            <div>
            <Header title="Quản lý thể loại"/>
            <ContentManageCategory/>
            </div>
        </CategoryContext.Provider>
    );
};

export default ManageCategory;