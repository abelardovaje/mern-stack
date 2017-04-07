import * as React from 'react';

export class Form extends React.Component<any,any>{
	
	constructor(){
		super();
		
		this.login = this.login.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
		console.log(this.props.contacts);
	}
	
	handleChange(e:any){
		this.props.formHandleChange(e);		
	}

	login(e:any){
		
	}

	
	render(){
		return (
			<div className="form-container">

				<form onSubmit={this.login} method="post">

					<input type="text" name="username" placeholder="username" onChange={this.handleChange}/>			
					<button>Login</button>

				</form>


			</div>
		)
	}
}