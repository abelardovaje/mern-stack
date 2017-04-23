import axios,{ AxiosRequestConfig, AxiosPromise } from 'axios';

export default function fetchUsers(){
	return function(dispatch:any){
		axios.get('https://randomuser.me/api/').then(function(response:any){
			console.log(response);
			dispatch({type:'FETCH_USERS_FULLFILED',payload:response})
		});
	}
}