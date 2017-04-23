import * as  React from 'react';
import {Header} from '../layouts/header';
import {Footer} from '../layouts/footer';
import UsersList from '../../containers/usersList';

export class Home extends React.Component<{},any>{

	constructor(){
		super()				
	}
	
	render(){
		return (
			<div>

				<Header/>

					<div className="container home-container">
						
						<UsersList/>
																
					</div>

			</div>
		);
	}
}