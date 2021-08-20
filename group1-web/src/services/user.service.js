import axios from "axios";

import { ENV_SERVER } from "../shared/env/environment";
import {USER_LIST} from "../shared/env/url_properties";

export const GetListUsers = async  () => {
  var userList = await axios.get(ENV_SERVER+USER_LIST).then(rs => rs.data);
  return userList ;

}
export default  {
    GetListUsers
}