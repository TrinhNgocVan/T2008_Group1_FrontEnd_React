import axios from "axios";
//import {ENV_SERVER} from "../shared/env/environment";
// import {USER_LIST} from "../shared/env/url_properties";

const   initialState =
    {
        username :  '',
    };


const userReducer = (state = initialState ,action) =>
{
    switch (action.type){
        case 'LOGIN_SUCCESS':{
         let username =state.username;
         username = action.payload;
            return  {
                ...state ,
                username : username
            }
        }

        default : return state ;
    }
}
export default userReducer;