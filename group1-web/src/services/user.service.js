import axios from "axios";

import { ENV_SERVER } from "../shared/env/environment";
import {PROFILE_GET, USER_GETPROFILE, USER_LIST} from "../shared/env/url_properties";

export const Login = async  (loginData) => {
    var token = await  axios.post(ENV_SERVER+'/api/Login',loginData,{
        headers : {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':"*"
        }
    }).then(rs => rs.data)
        .catch((err) => null);

    if(token !== null){
        localStorage.setItem("Token", token);
        var profile = await  axios.get("https://localhost:44358/api/AppUser/getProfile/"+loginData.username,{
            headers : { Authorization :`Bearer ${localStorage.getItem("Token")}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':"*"
            }
            }
        ).then(rs => rs.data).catch((err) =>{
            console.log(err.message);

        } );
       localStorage.setItem("profile",profile);
    }
  return token ;

}
export const GetListUsers = async () =>{

    let token = localStorage.getItem("Token");
    var users = await  axios.get(ENV_SERVER+USER_LIST,{
       headers : {  Authorization :`Bearer ${token}` }
    }).then(rs =>rs.data).catch();
    return users;
}
export const getProfileById = async  (profileId) => {
   //  console.log("profileId",profileId)
    let token = localStorage.getItem("Token");
    var profile = await  axios.get(ENV_SERVER+PROFILE_GET+profileId,{
        headers : {  Authorization :`Bearer ${token}` }
    }).then(rs => rs.data).catch(err => console.log(err.message));
    return profile ;
}
export default  {
    Login,
    GetListUsers,
}