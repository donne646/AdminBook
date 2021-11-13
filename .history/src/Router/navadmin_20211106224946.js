import ManageCategory from "../view/Category/ManageCategory";
import ManageProduct from "../view/Product/ManageProduct";
import ManagePublish from "../view/Publish/ManagerPublish";
import ManageUser from "../view/User/ManagerUser";

export const routeNavAdmin = [
    {
        icon : "fa fa-book navLink__icon",
        path: "/Order",
        label : "Quản lý đơn hàng",
        component: <ManageProduct/>
    },
    {
        icon : "fa fa-book navLink__icon",
        path: "/Product",
        label : "Quản lý sản phẩm",
        component: <ManageProduct/>
    },
    {
        icon : "fa fa-cubes navLink__icon",
        path: "/Cateogry",
        label : "Quản lý thể loại",
        component:  <ManageCategory/>
    },
    {
        icon : "fa fa-clipboard navLink__icon",
        path: "/Publish",
        label : "Nhà xuất bản",
        component:  <ManagePublish/>
    },
    {
        icon : "fa fa-users navLink__icon",
        path: "/ManageUser",
        label : "Tài khoản người dùng",
        component:  <ManageUser/>
    }
]
