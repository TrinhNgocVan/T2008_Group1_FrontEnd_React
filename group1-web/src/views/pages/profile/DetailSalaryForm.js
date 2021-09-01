import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import * as Yup from "yup";
import {Login} from "../../../services/user.service" ;
import {Link, useHistory} from "react-router-dom";


function DetailSalaryForm() {
    let history = useHistory();
    const initialValues = {
        salary: '',

    }
    const onSubmit = async (values) => {
        console.log("profile form", values.salary)

    }
    const validationSchema = Yup.object({
        salary: Yup.string().required('Required'),


    })
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}
                validationSchema={validationSchema}>
            <Form>
                <div className="row">
                    <div
                        className="col-sm-6 col-md-6">
                        <div
                            className="form-group">
                            <label htmlFor="salary">Mức lương thực nhận<span
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
                            <label htmlFor="insuranceSal">Tổng tiền</label>
                            <h1>Số tiền vnd</h1>

                        </div>
                    </div>

                </div>

                <div className="d-flex justify-content-end align-items-center">
                    <Link to="/user/list" id="back" className="btn btn-light"><i
                        className="icon-point-left mr-2"/>Quay lại</Link>
                    <button type="submit" id="btnSubmit"
                            className="btn btn-primary ml-3">Lưu<i
                        className="icon-database-insert ml-2"/></button>
                </div>
            </Form>
        </Formik>
    )
}

export default DetailSalaryForm;