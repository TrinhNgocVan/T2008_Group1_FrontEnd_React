import axios from "axios";
import {ENV_SERVER} from "../shared/env/environment";
import {
    DEBIT_GET,
    DEBIT_GET_PAYMENT,
    DEBIT_POST,
    GET_LATEST_SALARY_LIST, PROFILE_LIST, SALARY_GET_LIST, SALARY_GET_LIST_Payed, SALARY_PAYMENT_POST,
    USER_LIST,
} from "../shared/env/url_properties";
import {Login} from "./user.service";

export const GetLatestSalaryList = async () =>{

    let token = localStorage.getItem("Token");
    let salaryList = await  axios.get(ENV_SERVER+GET_LATEST_SALARY_LIST,{
        headers : {  Authorization :`Bearer ${token}` }
    }).then(rs =>rs.data).catch(err => console.log("error : ",err));
    console.log("profile list in service",salaryList)
    return salaryList;
}
export const GetListDebitsByProfileId = async (id) =>{
    let token = localStorage.getItem("Token");
    let debits = await  axios.get(ENV_SERVER+DEBIT_GET+id,{
        headers : {  Authorization :`Bearer ${token}` }
    }).then(rs =>rs.data).catch();

    return debits;
}
export const PaymentDebit = async (id) =>{
    let token = localStorage.getItem("Token");
    console.log("usel",ENV_SERVER+DEBIT_GET_PAYMENT+id);
    let debit = await  axios.get(ENV_SERVER+DEBIT_GET_PAYMENT+id,{
        headers : {  Authorization :`Bearer ${token}` }
    }).then(rs =>rs.data).catch();
    console.log("Debit in service",debit);
    return debit;
}
export const AddDebit = async (debit) =>{
    const json = JSON.stringify(debit);
    console.log("json",json)
    await axios.post(ENV_SERVER + DEBIT_POST, json, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then().catch();
}
export const SalaryPayment = async (profiles) =>{
    const json = JSON.stringify(profiles);
    console.log("json",json)
    await axios.post(ENV_SERVER +SALARY_PAYMENT_POST, json, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then( rs => {console.log("success",rs)}).catch( err => console.log("err",err));
}
export const GetListProfile = async () =>{
  return   await axios.get(ENV_SERVER + PROFILE_LIST, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
        }
    }).then(rs => rs.data).catch();
}
export const GetPayedSalaryList= async () =>{
    let token = localStorage.getItem("Token");
    let salaryList = await  axios.get(ENV_SERVER+SALARY_GET_LIST_Payed,{
        headers : {  Authorization :`Bearer ${token}` }
    }).then(rs =>rs.data).catch(err => console.log("error : ",err));
    return salaryList;
}


export default  {
    GetLatestSalaryList,
    GetListDebitsByProfileId,
    PaymentDebit,
    GetListProfile,
    SalaryPayment,
    GetPayedSalaryList
}