import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../assets/NavLink.scss"
const index = (props) => {
    return(
        <div className="navLink">
            <NavLink activeClassName="selected" 
                        to={props.to}
                        activeStyle={{
                            background: "#992ab2",
                            color : "white",
                            boxShadow: "#949DA5 0px 8px 24px",
                            border: "1px solid #992ab2",
                            borderRadius: "5px"
                        }}
                        >
                            <i className={props.icon}></i>
                            {props.label}
            </NavLink>   
        </div>   
    );
};

export default index;