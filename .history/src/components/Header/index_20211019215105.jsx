import React from 'react'
import {Card,Image,Button} from "react-bootstrap";
function Header() {
    return (
        <Card className="cardHeader">
                <div className="header d-flex justify-content-between">
                    <h4>{this.props.title}</h4>
                        <div className="header__logOutAdmin">
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
