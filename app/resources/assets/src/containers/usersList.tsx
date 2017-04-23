import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import fetchUsers from '../actions';
class UsersList extends React.Component<any,any>{
	
	componentDidMount(){
		this.props.dispatch(fetchUsers());
	}

	createListItem(){
		// return this.props.users.map((user:any)=>{
		// 	return (
		// 		<li key={user.id}> {user.name}</li>
		// 	)
		// });
	}	

	render(){

		return(
			<ul>
				{this.createListItem()}
			</ul>
		)
		
	}
}

function mapStateToProps(state:any){
	return{
		users:state.users
	}
}

export default connect(mapStateToProps)(UsersList);


