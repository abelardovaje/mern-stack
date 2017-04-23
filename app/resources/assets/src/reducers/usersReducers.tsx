export default function reducer(state={
	users:Array,
	fetching:false,
	fetched:false,
	error:""
},action:any){
	
	switch(action.type){
		case 'FETCH_USERS':{
			return{
				...state,fetching:true
			}
		}

		case 'FETCH_USERS_FULLFILED':{
			return {
				...state,fetching:true,users:action.payload
			}
		}


	}

	return state;
}