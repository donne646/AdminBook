import React from 'react'
import {Card,Image,Button} from "react-bootstrap";
function Header(props) {
    return (
                <div className="cardHeader__header">
                    <div className="cardHeader__header--title">
                        <h4>{props.title}</h4>
                    </div>
                    <div className="cardHeader__header--logOutAdmin">
                            <Button>Đăng xuất</Button>
                    </div>
                </div>
   )
}
export default Header;
