import React from 'react'
import {Card,Image,Button} from "react-bootstrap";
function Header(props) {
    return (
        <Card className="cardHeader">
                <div className="cardHeader__header d-flex justify-content-between">
                    <h4>{this.props.title}</h4>
                        <div className="cardHeader__header--logOutAdmin">
                            <div className="iconAdmin">
                                <Image/>
                            </div>
                                <Button>Đăng xuất</Button>
                        </div>
                </div>
        </Card>
    )
}
export default Header;
