import React from "react";

import {Switch,Route} from "react-router-dom";
 import Dashboard from "./Dashboard";
import UserList from './user/User_list';
import User_Form from "./user/User_Form";
import Header from "../layouts/Header";



// import all lazy page
// const Dashboard = React.lazy(() => import('./Dashboard') )


export default class Main extends React.Component{
    render() {
        return (

            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <Header/>
                        <Switch>
                            <Route path="/" exact> <Dashboard/> </Route>
                            <Route path="/user-list" exact><UserList/></Route>
                            <Route path="/user-form" exact><User_Form/></Route>

                        </Switch>

                    </div>
                </section>
            </div>
        )
    }
}