import React from 'react'
// import {Formik , Form ,Field , ErrorMessage } from "formik";
// import * as Yup from 'yup' ;
import  './User_Form.css';
import axios from "axios";
import {Redirect} from "react-router-dom";

export  default class User_Form extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                password: "",

            },
            redirect:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    handleChange(e){
        const name = e.target.name;// lay dc username cua input
        console.log('name',name)
        const value = e.target.value;// lay dc value cua input ->gia tri vua password
        console.log('value',value);
        let user = this.state.user ;
        user[name] = value ;
        this.setState({
            user : user
        })
    }
    submit(event){
        const user = this.state.user;
        console.log('user' , user);
        const json = JSON.stringify(user);
        console.log('json' , json);
        axios.post('https://localhost:44331/api/AppUser',json,{
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':"*"
            },

        }).then(rs=>{
            this.setState({
                redirect:true
            })
        })
        event.preventDefault();
    }
    render() {
        const redirect = this.state.redirect;
        const user = this.state.user;
        console.log('user',user);
        return (
            <div>
                {redirect?<Redirect to="/user-list"/>:null}
                <h1>Add User </h1>
                <div className="row">
                    <section className="col-10 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Username</label>
                                <input name="username" onChange={this.handleChange} value={user.username} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input name="password"  onChange={this.handleChange} value={user.password} className="form-control"/>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        );
    }
}