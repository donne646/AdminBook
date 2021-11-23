import React,{useState} from 'react'
import Header from "../../../components/Header";
import AuthorContext from "../../../Context/AuthorContext";
import ContentManageAuthor from '../ContentManageAuthor';
export default function ManageAuthor() {
    const [flag,setFlag] = useState();
    const handleAddFlag = () =>{
        setFlag("Add");
    }
    const handleEditFlag = () =>{
        setFlag("Edit");
    }
    return (
        <AuthorContext.Provider value={{
            flag : flag,
            handleEditFlag: ()=>handleEditFlag(),
            handleAddFlag: ()=>handleAddFlag()
        }}>
            <div>
            <Header title="Quản lý thể loại"/>
            <ContentManageAuthor/>
            </div>
        </AuthorContext.Provider>
    );
}
