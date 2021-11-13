import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {routeNavAdmin} from "../../Router/navadmin";
import logo from "../../Image/logo.png";
import NavLinkComponent from "../NavLinkComponent"; 
function NavAdmin(){
    const clickNav = () =>{
        const stateNav = document.getElementById("viewAdmin__nav--body").style.display;
        if(stateNav =="none"){
            document.getElementById("viewAdmin__nav--body").style.display = "block";
            document.getElementById("iconNav").className+= "activeNav";

        }else{
            document.getElementById("viewAdmin__nav--body").style.display = "none";
            document.getElementById("iconNav").className = "fa fa-bars ";
        }
    }
    return (
        <Router>
            <div className='viewAdmin'>
                <div className="viewAdmin__nav">
                    <div className="viewAdmin__nav--header ">
                        <img  className="img-fluid" src={logo} />
                    </div>
                    <hr/>
                    <div className="viewAdmin__nav--hamburger" >
                        <i className="fa fa-bars"  id="iconNav" onClick={()=>clickNav()}> Danh mục quản lý </i>
                        
                    </div>
                    <div className="viewAdmin__nav--body" id="viewAdmin__nav--body">
                        {routeNavAdmin.map((value,key)=>{
                            return (
                                <NavLinkComponent key={key} 
                                    icon = {value.icon}
                                    to={value.path}
                                    label={value.label}
                                />
                            ); 
                        })}
                    </div>  
                    
                </div>
                <div className="viewAdmin__content">
                    <Switch>
                    {routeNavAdmin.map((value,key)=>{
                        return (
                            <Route path = {value.path} key={key}>
                                {value.component}
                            </Route>
                        ); 
                    })}
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
export default NavAdmin;

