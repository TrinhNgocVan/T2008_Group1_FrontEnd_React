import  {combineReducers} from "redux";
import hobbyReducer from './reducer.hobby';
import userReducer from "./reducer.user";
const rootReducer = combineReducers({
    hobby : hobbyReducer,
    user : userReducer,
})

export default rootReducer;