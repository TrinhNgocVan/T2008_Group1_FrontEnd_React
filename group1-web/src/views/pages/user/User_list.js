
import './table.css'
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {GetListUsers} from "../../../services/user.service";

export default function User_list(){
        const [users , setUsers] = useState([]);
        useEffect( async ()=> {
           setUsers(await  GetListUsers());
        },[])



        return (
            <div className='row'>
                <section className="col-12 text-right">
                    DANH SÁCH NGƯỜI DÙNG
                    <Link to="/add-category" className="add-button btn btn-success">Thêm mới </Link>
                </section>
                <section className="col-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên tài khoản</th>
                            <th>Nhóm quyền</th>
                            <th>Trạng thái</th>
                            <th>Chỉnh sửa</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            users.map((e,k) => {
                                return <tr key={k}>
                                    <td>{k+1}</td>
                                    <td>{e.username}</td>
                                    <td>{
                                        e.group.map((e,k) => {
                                            return e.name ;
                                        })
                                    }</td>
                                    <td>Enabled</td>
                                    <td>Edit</td>
                                </tr>
                            })
                        }

                        </tbody>
                    </table>
                </section>
            </div>


        )



}