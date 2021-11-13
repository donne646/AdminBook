import React from 'react'
import {Card,Image,Button} from "react-bootstrap";
function Header(props) {
    return (
        <Card className="cardHeader">
                <div className="cardHeader__header">
                    <div>
                        <h4>{props.title}</h4>
                    </div>
                    <div className="cardHeader__header--logOutAdmin">
                            <Button>Đăng xuất</Button>
                    </div>
                </div>
        </Card>
    )
}
export default Header;
