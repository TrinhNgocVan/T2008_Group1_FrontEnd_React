import './table.css'
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {GetListUsers} from "../../../services/user.service";
import {Helmet} from "react-helmet";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Footer from "../../layouts/Footer";

export default function User_list() {
    const [users, setUsers] = useState([]);
    document.title = "Group1 | Danh sách tài khoản";
    useEffect(async () => {
        setUsers(await GetListUsers());

    }, [])
    return (
        <div>
            <Header/>
            <div className="page-content">
                <Sidebar/>
                <div className="content-wrapper">

                    <div className="page-header page-header-light">
                    </div>

                    <div className="content">
                        <div id="message_content"><span id="message_success"/></div>
                        <form id="userListForm" action="/user/list" method="post">

                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8 offset-md-2"><input className="form-control"
                                                                                     type="text"
                                                                                     name="username"
                                                                                     placeholder="Nhập tên đăng nhập..."/>
                                        </div>
                                        <div className="col-md-2">
                                            <button type="submit" className="btn btn-secondary"><i
                                                className="icon-search4"/> Tìm kiếm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card">
                                <div className="card-header header-elements-inline">
                                    <span
                                        className="text-uppercase font-size-lg font-weight-bold">Danh sách người dùng</span>

                                    <div className="header-elements">
                                        <div className="list-icons">
                                            <Link to="/user/form/info" className="btn btn-sm btn-primary"
                                                  title="Thêm mới"><i
                                                className="icon-plus22"/>Thêm mới</Link>

                                        </div>
                                    </div>

                                </div>
                                <div className="card-body">Quản lý danh sách người dùng hệ thống.</div>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                        <tr className="table-success">
                                            <th className="text-center">STT</th>
                                            <th>Tên đăng nhập</th>
                                            <th>Nhóm quyền
                                            </th>

                                            <th className="text-center">Trạng thái</th>


                                            <th className="text-center"><i className="icon-menu-open2"/>
                                            </th>

                                        </tr>
                                        </thead>
                                        <tbody>

                                        {
                                            users.map((u, k) => {
                                                return <tr key={k}>
                                                    <td className="text-center">{k + 1}</td>
                                                    <td>{u.username}</td>
                                                    <td><p>{
                                                        u.group.map((g, k) => {
                                                                return <span>{g.name}</span>
                                                            }
                                                        )
                                                    }</p></td>
                                                    <td className="text-center">
                                                        {(u.accountEnabled) ?
                                                            <i className="icon-circle2 icon-green"/>
                                                            : <i className="icon-circle2 icon-red"/>
                                                        }

                                                    </td>


                                                    <td className="text-center">
                                                        <div className="list-icon">

                                                            <Link to="/user/form/info" params={{id: u.id}}
                                                                  className="list-icons-item text-primary-600"
                                                                  data-popup="tooltip" title="Sửa"><i
                                                                className="icon-pencil7"/></Link>


                                                        </div>
                                                    </td>


                                                </tr>
                                            })
                                        }


                                        </tbody>
                                    </table>
                                </div>


                                <input type="hidden" name="page" id="page" value="0"/>
                                <input type="hidden" name="size" id="size" value="10"/>


                                <div className="row">
                                    <div className="col-lg-12">

                                        <div className="card card-body card-custom text-center">
                                            <ul className="pagination pagination-separated align-self-center">


                                                <li className="page-item disabled"><span className="page-link">Showing 1 to 4 of 4 items</span>
                                                </li>


                                                <li className="page-item disabled"><a href="#"
                                                                                      className="page-link">&lt; &lt;</a>
                                                </li>


                                                <li className="page-item disabled"><a href="#"
                                                                                      className="page-link">&larr; &nbsp; Prev</a>
                                                </li>


                                                <li className="page-item active"><a href="#" className="page-link">1</a>
                                                </li>


                                                <li className="page-item disabled"><a href="#"
                                                                                      className="page-link">Next &nbsp; &rarr;</a>
                                                </li>


                                                <li className="page-item disabled"><a href="#"
                                                                                      className="page-link">&gt; &gt;</a>
                                                </li>


                                                <li className="page-link">
                                                    <span>Show</span>
                                                    <select id="selectPage">

                                                        <option value="5">5</option>

                                                        <option value="10" selected>10</option>

                                                        <option value="15">15</option>

                                                        <option value="20">20</option>

                                                    </select>
                                                    items
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </form>


                    </div>

                </div>



            </div>
            <Footer/>

        </div>


    )


}