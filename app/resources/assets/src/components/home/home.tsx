import * as  React from 'react';
import {Header} from '../layouts/header';
import {Footer} from '../layouts/footer';
import {Form} from './form';
import  {Chat} from './chat';


export class Home extends React.Component<{},any>{

	constructor(){
		super()
		this.state = {
			name:"",
			age:0,	
			contacts:[{
				name:'abel',
				age:29,
				id:1
			}]
		}
		this.handleChange = this.handleChange.bind(this);
		this.addContact = this.addContact.bind(this);

		
	}

	
	loadContacts(){

		let lists= this.state.contacts.map((list:any,key:number)=>
			<tr key={key}>
				<td>{list.id}</td>
				<td>{list.name}</td>
				<td>{list.age}</td>
				<td><button className="btn btn-primary">Edit</button></td>
			</tr>

			);

		return lists;

	}


	homeService(){
		return {



		}

	}

	handleChange(e:any){

		this.setState({
			[e.target.name]:e.target.value
		})
		
	}

	addContact(){
	  
		let contacts = this.state.contacts;

		contacts.push({
			name:this.state.name,
			age:this.state.age
		});

		this.setState({
			contacts:contacts
		});
			
	}

	
	render(){
		return (
			<div>

				<Header/>

					<div className="container home-container">
						
						<Form/>
						<Chat/>
																
					</div>

			</div>
		);
	}
}