
import React from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Footer from "../../layouts/Footer";
import SalaryForm from "./SalaryForm";
function SalaryFormPage(){

    return (

        <div>
            <Header/>
            <div className="page-content">
                <Sidebar/>
                <div className="content-wrapper">

                    <div className="page-header page-header-light">
                    </div>
                    <div className="content">
                        <SalaryForm/>

                    </div>
                    <Footer/>


                </div>
            </div>
        </div>

    )
}
export default SalaryFormPage ;