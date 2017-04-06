import * as React from 'react';
import axios,{ AxiosRequestConfig, AxiosPromise } from 'axios';


export class Login extends React.Component<any,any>{
	constructor(){
		super();
		this.state = {username:"",password:"",output:[]};		
		this.handleChange = this.handleChange.bind(this);
		this.login = this.login.bind(this);
		
	}

	login(e:any){
		
		let $this = this;

		/*
			Use any http request library
		*/
		axios({
			method:'post',
			url:'/login',
			data:{
				username:this.state.username,
				password:this.state.password
			}
		}).then(function(response){
			console.log(response);
			
			let list:string[] = [];
			for(let entry in response.data){
				console.log(response.data[entry]);
				list.push(response.data[entry]);
			}

			let lists = list.map((val,index)=>
				<li key={index}>{val}</li>);
			
			$this.setState({
				sample:lists
			});

			
		});

		// window.location.assign('/home');
		e.preventDefault();
	}

	handleChange(event:any){
		
		this.setState({
			[event.target.name]:event.target.value
		});
		
	}

	render(){
		return(
			<div>
				<h1>Login</h1>
				<form onSubmit={this.login} method="post">
					<input type="text" name="username"value={this.state.username} onChange={this.handleChange}placeholder="username"/><br/>
					<input type="password" name="password"value={this.state.password} onChange={this.handleChange} placeholder="password"/><br/>
					<button>Login</button>
				</form>
				<h2>Output</h2>
				<div>
				<ul>
				{this.state.sample}
				</ul>
				</div>
			</div>
		);
	}
}