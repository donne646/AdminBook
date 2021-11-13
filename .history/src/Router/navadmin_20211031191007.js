import ManageCategory from "../view/Category/ManageCategory";
import ManageProduct from "../view/Product/ManageProduct";

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
    }
]
