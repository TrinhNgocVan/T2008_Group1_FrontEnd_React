import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import { GetListProfile} from "../../../services/salary.services";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Footer from "../../layouts/Footer";


function ProfileList() {
    document.title = "Group 1 | Hồ sơ lương nhân viên"
    const [lsProfile, setLsProfile] = useState([]);
    useEffect(async () => {
        setLsProfile(await GetListProfile());
    }, [])
    const showNumber = (num) => {
        return (num).toLocaleString(
            undefined,
            { minimumFractionDigits: 2 }
        );
    }
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
                            <div className="card-header header-elements-inline">
                                <span
                                    className="text-uppercase font-size-lg font-weight-bold">Bảng lương nhân viên công ty </span>
                                {/*
                        <div className="header-elements">
                            <div className="list-icons">
                                <Link to="/user/form/info" className="btn btn-sm btn-primary" title="Thêm mới"><i
                                    className="icon-plus22" />Thêm mới</Link>

                            </div>
                        </div>
                              */}
                            </div>

                            <div className="card-body">Quản lý bảng lương nhân viên công ty</div>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                    <tr className="table-success">
                                        <th className="text-center">Stt</th>
                                        <th className="text-center">Họ tên </th>
                                        <th className="text-center">Lương cứng (vnd)</th>
                                        <th className="text-center">Lương đóng bảo hiểm(vnd)</th>
                                        <th className="text-center">Phụ cấp hàng tháng (vnd)</th>
                                        <th className="text-center"><i className="icon-menu-open2"/>
                                        </th>

                                    </tr>
                                    </thead>
                                    <tbody>

                                    {
                                        lsProfile.map((p, k) => {
                                            return <tr key={k}>
                                                <td className="text-center">{k+1}</td>
                                                <td className="text-center">{p.fullname}</td>
                                                <td className="text-center">{showNumber(Number(p.salary))}</td>
                                                <td className="text-center">{showNumber(Number(p.insuranceSalary))}</td>
                                                <td className="text-center">{showNumber(Number(p.longTermAllowance))}</td>
                                                <td className="text-center">
                                                        <i className="icon-pencil7"/>
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
                <Footer/>
                </div>

            </div>

        </div>

    )
}

export default ProfileList;