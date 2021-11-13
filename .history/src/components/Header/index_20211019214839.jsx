import React from 'react'
import {Card} from "react-bootstrap";
function Header() {
    return (
        <Card className="cardHeader">
                <div className="header d-flex justify-content-between">
                    <h4>{this.props.title}</h4>
                        <div className="d-flex justify-content-around logOutAdmin">
                            <div className="iconAdmin">
                                <Image src={logo}/>
                            </div>
                                <Button onClick={() => this.logOut()} href="./">Đăng xuất</Button>
                        </div>
                </div>
        </Card>
    )
}
export default Header;
