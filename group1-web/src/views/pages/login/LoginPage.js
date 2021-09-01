import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup'
import React from 'react'


import {Login} from "../../../services/user.service" ;
import { useHistory} from "react-router-dom";

export default function LoginPage(props) {
    document.title = "Group1 | Đăng nhập"
    const initialValues = {
        email: '',
        password: '',

    }
    let history = useHistory();
    const onSubmit = async (values) => {

        let loginData = {
            "username": values.email,
            "password": values.password
        }
        let token = await Login(loginData);
        if (token !== null) {

            history.push("/");
        }

    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required'),


    })

    return (
        <div className=" container-fluid">
            <div className="row">
                <div className="img-holder">
                    <div className="bg"/>
                    <div className="info-holder"/>

                </div>
                <div className="form-holder">


                    <div className="form-content">
                        <div className="form-items">
                            <img src='/themes/login/images/keysoft-logo.png' height="200px" width="400px"
                            />
                            <Formik initialValues={initialValues} onSubmit={onSubmit}
                                    validationSchema={validationSchema}>
                                <Form>
                                    <br/>
                                    <span>Tên đăng nhập : </span>

                                    <Field type='email' className="form-control input-login" id='email' name='email'/>


                                    <span>Mật khẩu : </span>
                                    <Field className="form-control input-login" type='password' id='password'
                                           name='password'/>

                                    <div className="form-button">
                                        <button type="submit" className="ibtn btn-login">Đăng nhập</button>
                                    </div>
                                </Form>
                            </Formik>
                            <div className="other-links">
                                <span>Or login with</span><a href="#">Facebook</a><a href="#">Google</a><a
                                href="#">Linkedin</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}