import React,{useState} from 'react';
import Header from "../../../components/Header";
import VoucherContext from '../../../Context/VoucherContext';
import ContentManageVoucher from '../ContentManageVoucher/index.';
const ManageVoucher = () => {
    const [flag,setFlag] = useState();
    const handleAddFlag = () =>{
        setFlag("Add");
    }
    const handleEditFlag = () =>{
        setFlag("Edit");
    }
    return (
        <VoucherContext.Provider value={{
            flag : flag,
            handleEditFlag: ()=>handleEditFlag(),
            handleAddFlag: ()=>handleAddFlag()
        }}>
            <div>
            <Header title="Quản lý thể loại"/>
            <ContentManageVoucher/>
            </div>
        </VoucherContext.Provider>
    );
};

export default ManageVoucher;