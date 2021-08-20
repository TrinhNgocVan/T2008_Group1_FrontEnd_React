import React from "react";

import {Switch,Route} from "react-router-dom";

import UserList from './user/User_list';
import User_Form from "./user/User_Form";

import HomePage from "./HomePage/HomePage";
import Footer from "../layouts/Footer";



export default class Main extends React.Component{
    render() {
        return (
            //MainContent
            <div className="content-wrapper">

                <div className="page-header page-header-light">
                </div>
               <div className="content">

                        <Switch>
                            <Route path="/home" exact><HomePage/></Route>
                            <Route path="/user-list" exact><UserList/></Route>
                            <Route path="/user-form" exact><User_Form/></Route>

                        </Switch>


                </div>
                <Footer/>


            </div>
        )
    }
}