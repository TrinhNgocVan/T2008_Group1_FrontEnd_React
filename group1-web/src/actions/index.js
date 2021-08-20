import {ADD_ARTICLE} from "../shared/constants/action-type";


export function addArticle(payload){
    return {type: ADD_ARTICLE ,payload};
}