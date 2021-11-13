import ManageCategory from "../view/Category/ManageCategory";
import ManageProduct from "../view/Product/ManageProduct";
import ManagePublish from "../view/Publish/ManagerPublish";

export const routeNavAdmin = [
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
        label : "Quản lý nhà xuất bản",
        component:  <ManagePublish/>
    }
]
