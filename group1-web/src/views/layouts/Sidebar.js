import React from 'react';
import {Link} from 'react-router-dom';
import placeHolder from '../pages/image/placeholder.jpg';
import sidebar from './sidebar.css'
export default class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            categories:[]
        }
    }


    render() {
        // const categories = this.state.categories;
        return (
            <div className="sidebar sidebar-light sidebar-main sidebar-expand-md">

                <div className="sidebar-mobile-toggler text-center">
                    <Link to="#" className="sidebar-mobile-main-toggle"><i className="icon-arrow-left8" /></Link>
                    Navigation
                    <Link to="#" className="sidebar-mobile-expand"><i className="icon-screen-full" /><i className="icon-screen-normal" /></Link>
                </div>

                <div className="sidebar-content">


                    <div className="sidebar-user">
                        <div className="card-body">
                            <div className="media">
                                <div className="mr-3"><Link to="#"><img src={placeHolder} width="38" height="38"  className="rounded-circle" alt="" /></Link></div>
                                <div className="media-body">
                                    <div className="media-title font-weight-semibold">Hello, cust@keysoft.vn</div>
                                    <div className="font-size-xs opacity-50">
                                        <i className="icon-pin font-size-sm" />
                                        <span>Tổ chức <strong /></span>
                                    </div>
                                </div>
                                <div className="ml-3 align-self-center"><Link to="#" className="text-white"><i className="icon-cog3"/></Link></div>
                            </div>
                        </div>
                    </div>



                    <div className="card card-sidebar-mobile">
                        <ul className="nav nav-sidebar" data-nav-type="accordion">

                            <li className="nav-item"><Link menu="homeMenu" to="/" className="nav-link "><i className="icon-home4" /><span>Trang chủ</span></Link></li>


                            <li className="nav-item"><Link menu="dashboardMenu" to="/dashboard/list" className="nav-link "><i className="icon-newspaper" aria-hidden="true" /><span>Monitoring</span></Link></li>


                            <li className=" nav-item nav-item-submenu ">
                                <Link  to="#" className="nav-link "><i className="icon-cog3" /> <span>Quản trị hệ thống</span></Link>
                                <ul className="nav nav-group-sub" >
                                    <li className="nav-item"><Link menu="userList" to="/user/list" className="nav-link">Danh sách tài khoản</Link></li>
                                    <li className="nav-item"><Link menu="userList" to="/group/list" className="nav-link">Nhóm quyền</Link></li>
                                </ul>
                            </li>



                            <li className="nav-item"><Link menu="custMenu" to="/customer/list" className="nav-link "><i className="fa fa-server" aria-hidden="true" /><span>Quản lý khách hàng</span></Link></li>



                            <li className="nav-item"><Link menu="documentMenu" to="/document/list" className="nav-link "><i className="icon-books" aria-hidden="true" /><span>Quản lý tài liệu</span></Link></li>



                            <li className="nav-item"><Link menu="categoryMenu" to="/category/list" className="nav-link ">< i className="icon-coin-dollar" aria-hidden="true" /><span>Danh mục thiết bị</span></Link></li>



                            <li className=" nav-item nav-item-submenu ">
                                <Link  to="#" className="nav-link "><i className="icon-coins" aria-hidden="true" /><span>Quản lý tài sản</span></Link>
                                <ul className="nav nav-group-sub" >
                                    <li className="nav-item"><Link menu="assetList" to="/asset/list" className="nav-link">Danh sách tài sản</Link></li>

                                    <li className="nav-item"><Link menu="assetAdd" to="/asset/form" className="nav-link">Nhập kho</Link></li>

                                    <li className="nav-item nav-item-submenu">
                                        <Link to="#" className="nav-link">Xuất kho</Link>
                                        <ul className="nav nav-group-sub"  >
                                            <li className="nav-item"><Link menu="assetClient" to="/export/client/form" className="nav-link">Khách hàng</Link></li>
                                            <li className="nav-item"><Link menu="assetInternal" to="/export/internal/form" className="nav-link">Nội bộ</Link></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item"><Link menu="assetHistMenu" to="/assetHistory/list" className="nav-link "><span>Lịch sử tài sản</span></Link></li>
                                    <li className="nav-item"><Link menu="assetExport" to="/export/list" className="nav-link">Đơn hàng đã xuất</Link></li>
                                </ul>
                            </li>


                            <li className="nav-item"><Link menu="quoteMenu" to="/quote/list" className="nav-link "><i className="icon-cash3" aria-hidden="true" /><span>Báo giá</span></Link></li>




                            <li className="nav-item nav-item" ><Link  to="#" className="cnavbar-nav-link sidebar-control sidebar-main-toggle nav-link"><i className="fa fa-angle-double-left" id="collapse"/><span>Thu gọn</span></Link></li>
                        </ul>
                    </div>


                </div>


            </div>


        );
    }
}