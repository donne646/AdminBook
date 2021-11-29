import ManageCategory from "../view/Category/ManageCategory";
import ManageOrder from "../view/Order/ManageOrder";
import ManageProduct from "../view/Product/ManageProduct";
import ManagePublish from "../view/Publish/ManagePublish";
import ManageUser from "../view/User/ManagerUser";
import ManageVoucher from "../view/Voucher/ManageVoucher";
import ManageAuthor from "../view/Author/ManageAuthor";
export const routeNavAdmin = [

    {
        icon : "fa fa-shopping-cart navLink__icon",
        path: "/Admin/Orders",
        label : "Quản lý đơn hàng",
        component: <ManageOrder />
    },
    {
        icon : "fa fa-book navLink__icon",
        path: "/Admin/Products",
        label : "Quản lý sản phẩm",
        component: <ManageProduct/>
    },
    {
        icon : "fa fa-cubes navLink__icon",
        path: "/Admin/Cateogry",
        label : "Quản lý thể loại",
        component:  <ManageCategory/>
    },
    {
        icon : "fa fa-address-card navLink__icon",
        path: "/Admin/Author",
        label : "Quản lý tác giả",
        component:  <ManageAuthor/>
    },
    {
        icon : "fa fa-clipboard navLink__icon",
        path: "/Admin/Publish",
        label : "Nhà xuất bản",
        component:  <ManagePublish/>
    },
    {
        icon : "fa fa-barcode navLink__icon",
        path: "/Admin/Voucher",
        label : "Mã khuyến mãi",
        component:  <ManageVoucher/>
    },
    {
        icon : "fa fa-users navLink__icon",
        path: "/Admin/ManageUser",
        label : "Tài khoản người dùng",
        component:  <ManageUser/>
    }
]
