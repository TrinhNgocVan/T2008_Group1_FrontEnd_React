import axios from "axios";
//import {ENV_SERVER} from "../shared/env/environment";
// import {USER_LIST} from "../shared/env/url_properties";

const   INIT_STATE =
    {
        username : ''
    };


 export async function reducer(state = INIT_STATE ,action){
  state.username = await axios.get('https://localhost:44347/api/AppUser/2').then(rs => rs.data.username);
  console.log('state in reducer', state.username);
   switch (action.type){
        default :
            return state ;
    }
}
