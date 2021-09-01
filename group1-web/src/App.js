import './App.css';

import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./views/pages/Main";
import Login from "./views/pages/login/LoginPage";
import User_List from "./views/pages/user/User_list";
import User_Form from "./views/pages/user/User_Form";
import ProfileList from "./views/pages/profile/profileList";
import SalaryFormPage from "./views/pages/profile/SalaryFormPage";
import SalaryForm from "./views/pages/profile/SalaryForm";
import SalaryList from "./views/pages/salary/SalaryList";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/login" exact><Login/></Route>
                    <Route path="/" exact>  <Main/></Route>
                    <Route path="/user/list" exact><User_List/></Route>
                    <Route path="/user/form/info" exact><User_Form/></Route>
                    <Route path="/salary/profile/list/" exact><ProfileList/></Route>
                    <Route path="/salary/count" exact><SalaryForm/></Route>
                    <Route path="/salary/list" exact><SalaryList/></Route>
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
