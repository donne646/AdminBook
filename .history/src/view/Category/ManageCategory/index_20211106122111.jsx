import React,{useState} from 'react';
import Header from "../../../components/Header";
import ContentManageCategory from '../ContentManageCategory';
const CategoryContext = React.createContext();
const ManageCategory = () => {
    const [flag,setFlag] = useState();

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