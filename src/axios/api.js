//import{fetch} from "./fetch";
//import api from './url';
//
//
//
//export function lookOpotion(issuser,userId){
//	return fetch({
//		url:api.Hallowmas+'/halloween/'+issuer+'/question',
//		method:'get',
//		params:{
//			currentUserId:userId
//		}
//	})
//}



import axios from 'axios'

const URL = 'http://test.com/api'
let host = window.hostname
export const requireArticle = parms => {return axios.get('/article',parms).then(res=>res)}
