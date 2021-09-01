import {Link, useHistory} from "react-router-dom";
import UserForm from './UserForm.css'
import * as Yup from "yup";
import {Form, Formik, Field, ErrorMessage} from "formik";
import React from "react";
import axios from "axios";
import {ENV_SERVER} from "../../../shared/env/environment";
import {USER_LIST} from "../../../shared/env/url_properties";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Footer from "../../layouts/Footer";

document.title = "Group1 | Thêm mới tài khoản";

function User_Form() {
    let history = useHistory();
    const initialValues = {
        fullname: '',
        phone: '',
        address: '',
        email: '',
        salary: '',
        insuranceSal: ''

    }

    const onSubmit = async (values) => {
        let userData = {
            Username: values.email,
            Profile: {
                Fullname: values.fullname,
                Phone: values.phone,
                Email: values.email,
                Address: values.address,
                Salary: values.salary,
                InsuranceSalary: values.insuranceSal,
            }
        }
        const json = JSON.stringify(userData);
        await axios.post(ENV_SERVER + USER_LIST, json, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Token")}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then().catch();
        history.push("/user/list");


    }
    const validationSchema = Yup.object({
        fullname: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
        salary: Yup.string().required('Required'),
        insuranceSal: Yup.string().required('Required'),

    })

    return (
        <div>
            <Header/>
            <div className="page-content">
                <Sidebar/>
                <div className="content-wrapper">

                    <div className="page-header page-header-light">
                    </div>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        <Form id="userform" method="post">
                            <div className="content">

                                <div className="card">
                                    <div className="card-header header-elements-inline">
                                        <span className="text-uppercase font-size-lg font-weight-bold">Tạo/cập nhập thông tin người dùng</span>
                                        <div className="header-elements">
                                            <div className="list-icons"><Link className="list-icons-item"
                                                                              data-action="collapse"/><Link
                                                className="list-icons-item" data-action="reload"/><Link
                                                className="list-icons-item" data-action="remove"/></div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <p className="mb-4">Tạo và cập nhập, phân quyền quản lý, xem thông tin tài
                                            khoản người dùng.</p>
                                        <fieldset className="mb-3">
                                            <legend className="text-uppercase font-size-sm font-weight-bold">Chi
                                                tiết
                                            </legend>

                                            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                                <li className="nav-item"><a href="#"
                                                                            className="nav-link active"><i
                                                    className="icon-file-text2 mr-2"/>Thông tin người
                                                    dùng</a></li>
                                                <li className="nav-item"><a
                                                    href="javascript:User.check('/user/form/privileges',-1);"
                                                    className="nav-link"><i
                                                    className="icon-hammer-wrench mr-2"/>Phân quyền</a>
                                                </li>
                                            </ul>

                                            <div className="tab-content">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="tab-content">
                                                            <div id="user-information"
                                                                 className="row tab-pane fade show active">
                                                                <div className="row">
                                                                    <div
                                                                        className="col-sm-6 col-md-3">
                                                                        <div
                                                                            className="form-group">
                                                                            <label htmlFor="fullname">Họ
                                                                                và
                                                                                tên<span
                                                                                    className="help-block"> *</span></label>
                                                                            <Field
                                                                                id="fullname"
                                                                                name="fullname"
                                                                                placeholder="Họ v&agrave; t&ecirc;n"
                                                                                autoFocus="on"
                                                                                className="form-control"
                                                                                required="required"
                                                                                type="text"

                                                                                maxLength="100"/>
                                                                            <div className='error'><ErrorMessage
                                                                                name='fullname'/></div>
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        className="col-sm-6 col-md-3">
                                                                        <div
                                                                            className="form-group">
                                                                            <label htmlFor="phone">Điện
                                                                                thoại</label>
                                                                            <Field
                                                                                id="phone"
                                                                                name="phone"
                                                                                placeholder="Điện thoại"
                                                                                className="form-control"
                                                                                type="text"

                                                                                maxLength="30"/>
                                                                            <div className='error'><ErrorMessage
                                                                                name='phone'/></div>
                                                                        </div>
                                                                    </div>


                                                                    <div
                                                                        className="col-sm-6 col-md-6">
                                                                        <div
                                                                            className="form-group">
                                                                            <label>Địa
                                                                                chỉ</label>
                                                                            <Field
                                                                                id="address"
                                                                                name="address"
                                                                                placeholder="Địa chỉ"
                                                                                className="form-control"
                                                                                type="text"

                                                                                maxLength="200"/>
                                                                            <div className='error'><ErrorMessage
                                                                                name='address'/></div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <div className="row">

                                                                    <div
                                                                        className="col-sm-6 col-md-6">
                                                                        <div
                                                                            className="form-group">
                                                                            <label htmlFor="email">Tên
                                                                                đăng
                                                                                nhập<span
                                                                                    className="help-block"> *</span></label>


                                                                            <Field
                                                                                id="email"
                                                                                name="email"
                                                                                minLength="5"
                                                                                placeholder="Nhập địa chỉ email"
                                                                                type="email"
                                                                                className="form-control"
                                                                                required="required"


                                                                                maxLength="50"/>


                                                                            <div>
                                                                                <div className='error'><ErrorMessage
                                                                                    name='email'/></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div
                                                                        className="col-sm-2 col-md-4">
                                                                        <div
                                                                            className="form-group form-check form-check-switch form-check-switch-left">
                                                                            <label
                                                                                className="d-flex align-items-center">Kích
                                                                                hoạt
                                                                                tài
                                                                                khoản</label>
                                                                            <label
                                                                                className="switch">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    checked/>
                                                                                <span
                                                                                    className="slider round"/>
                                                                            </label>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className="row">
                                                                    <div
                                                                        className="col-sm-6 col-md-6">
                                                                        <div
                                                                            className="form-group">
                                                                            <label htmlFor="salary">Mức lương hàng tháng<span
                                                                                className="help-block"> </span></label>
                                                                            <Field
                                                                                id="salary"
                                                                                name="salary"
                                                                                placeholder="Đơn vị  : vnđ"
                                                                                autoFocus="on"
                                                                                className="form-control"
                                                                                required="required"
                                                                                type="text"

                                                                            />
                                                                            <div className='error'><ErrorMessage
                                                                                name='salary'/></div>
                                                                        </div>
                                                                    </div>


                                                                    <div
                                                                        className="col-sm-6 col-md-6">
                                                                        <div
                                                                            className="form-group">
                                                                            <label htmlFor="insuranceSal">Mức lương đóng
                                                                                bảo hiểm</label>
                                                                            <Field
                                                                                id="insuranceSal"
                                                                                name="insuranceSal"
                                                                                placeholder="Đơn vị  : vnđ"
                                                                                className="form-control"
                                                                                type="text"

                                                                            />
                                                                            <div className='error'><ErrorMessage
                                                                                name='insuranceSal'/></div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>

                                        <div className="d-flex justify-content-end align-items-center">
                                            <Link to="/user/list" id="back" className="btn btn-light"><i
                                                className="icon-point-left mr-2"/>Quay lại</Link>
                                            <button type="submit" id="btnSubmit"
                                                    className="btn btn-primary ml-3">Lưu<i
                                                className="icon-database-insert ml-2"/></button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </ Form>
                    </Formik>
                    <Footer/>


                </div>
            </div>
        </div>
    )
}

export default User_Form;