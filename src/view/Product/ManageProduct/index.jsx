import React,{useState} from 'react';

import { Route, Switch, useRouteMatch } from 'react-router';
import Header from '../../../components/Header';

import EditProduct from '../EditProduct';
import ContentManageProduct from '../ContentManageProduct';
import ProductContext from "../../../Context/ProductContext/ProductContext";

const ManageProduct = () => {
    const match = useRouteMatch();
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
            <Switch>
                <Route path={match.url+'/:id'}>
                    <Header title="Quản lý sản phẩm"/> 
                    <EditProduct/>
                </Route>
                <Route path={match.url}>
                    <Header title="Quản lý sản phẩm"/> 
                    <ContentManageProduct/>
                </Route>
            </Switch>
        </ProductContext.Provider>
    );
};

export default ManageProduct;