import React from "react";

import HomePage from "./homePage/HomePage";
import Footer from "../layouts/Footer";

import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";


export default class Main extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="page-content">
                    <Sidebar/>
                    <div className="content-wrapper">

                        <div className="page-header page-header-light">
                        </div>
                        <div className="content">
                            <HomePage/>

                        </div>
                        <Footer/>


                    </div>
                </div>
            </div>
        )
    }
}