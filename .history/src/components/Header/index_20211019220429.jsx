import React from 'react'
function Header(props) {
    return (
            <div className="header">
                <div className="header__title">
                    <h4>{props.title}</h4>
                </div>
                <div className="header__logOutAdmin">
                     <button>Đăng xuất</button>
                </div>
            </div>
   )
}
export default Header;
