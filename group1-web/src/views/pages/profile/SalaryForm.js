import React, { useEffect, useState} from "react";
import { useHistory} from "react-router-dom";

import {GetListProfile,SalaryPayment} from "../../../services/salary.services";

import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Footer from "../../layouts/Footer";
import {LIST_DAY_MONTN} from "../../../shared/constants/action-type";


function SalaryForm() {
    document.title = "Group1 | Tạo mới bảng lương ";
    let history = useHistory();
    const [lsProfile, setLsProfile] = useState([]);
    const [dayNumberInMontn, setdayNumberInMontn] = useState(31);
    const [month ,setMonth] = useState(1);
    useEffect(async () => {
        setLsProfile(await GetListProfile());

    }, [])
    const showNumber = (num) => {
        return (num).toLocaleString(
            undefined,
            { minimumFractionDigits: 0 }
        );
    }
    const submit = () =>{
        SalaryPayment(lsProfile);
        history.push("/salary/list");
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
                        <form id="userListForm" onSubmit={() => {submit()}}  method="post">

                            <div className="card">
                                <div className="card-header header-elements-inline">
                                <span
                                    className="text-uppercase font-size-lg font-weight-bold">Tính lương nhân viên công ty  </span>
                                <br/><span>Chọn tháng :<select id="ddlViewBy" onChange={(e) => {
                                    setdayNumberInMontn(LIST_DAY_MONTN[Number(e.target.value)-1]);
                                    setMonth(Number(e.target.value));
                                }}   >
                                                        {
                                                            LIST_DAY_MONTN.map((d,k) =>{
                                                                return <option value={k+1}>Tháng {k+1}</option>
                                                            })
                                                        }
                                                        </select> </span>
                                </div>

                                <div className="card-body">Tínhlương nhân viên công ty tháng {} năm {} </div>
                                <div className="table-responsive">

                                        <table className="table table-bordered table-striped">
                                            <thead>
                                            <tr className="table-success">

                                                <th className="text-center">Họ tên </th>
                                                <th className="text-center">Lương cứng (vnd)</th>
                                                <th className="text-center">Lương đã trừ ngày nghỉ (vnd)</th>
                                                <th className="text-center">Lương đóng bảo hiểm(vnd)</th>
                                                <th className="text-center">Số tiền đóng bảo hiểm vả thuế(vnd)</th>
                                                <th className="text-center">Phụ cấp hàng tháng (vnd)</th>
                                                <th className="text-center">Số ngày nghỉ</th>
                                                <th className="text-center">Lương thực nhận</th>


                                            </tr>
                                            </thead>
                                            <tbody>

                                            {
                                                lsProfile.map((p, k) => {
                                                    return <tr key={k}>

                                                        <td className="text-center">{p.fullname}</td>
                                                        <td className="text-center" >{showNumber(Number(p.fullSalary))}</td>
                                                        <td className="text-center" >{showNumber(Number(p.salary))}</td>
                                                        <td className="text-center">{showNumber(Number(p.insuranceSalary))}</td>
                                                        <td className="text-center">{showNumber(Number(p.insuranceSalary*0.03))}</td>
                                                        <td className="text-center">{showNumber(Number(p.longTermAllowance))}</td>
                                                        <td className="text-center"><input id="ngaynghi" type="number" min={0} max={dayNumberInMontn} onChange={(e) => {

                                                            setLsProfile(lsProfile.map((profile , index) => {
                                                                if(index == k){
                                                                    profile.realSalary = profile.fullSalary / dayNumberInMontn * (dayNumberInMontn - Number(e.target.value)) - Number(p.insuranceSalary*0.03) + Number(p.longTermAllowance);
                                                                    profile.salary = profile.fullSalary / dayNumberInMontn * (dayNumberInMontn - Number(e.target.value)) ;
                                                                    profile.month = month ;
                                                                }
                                                                return profile ;
                                                            }));
                                                        }} required  /> </td>
                                                        <td className="text-center">{showNumber(Number(p.realSalary))}</td>



                                                    </tr>
                                                })
                                            }


                                            </tbody>
                                        </table>

                                </div>
                                <div className="dem">

                                </div>
                                <div className="d-flex justify-content-end align-items-center">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-danger">Submit</button>
                                    </div>
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

export default SalaryForm;