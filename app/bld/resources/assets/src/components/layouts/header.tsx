import * as React from 'react';

export class Header extends React.Component<{},{}>{

	menus(){

		let lists:string[] = ['Home','About'];

		let links = lists.map((link,index)=>
			<li key={index}><a href={link.toLowerCase()}>{link}</a></li>
		)
		return links;

	}
	render(){
		return(

			<div className="header">
				<ul>

					{this.menus()}
					

				</ul>
			</div>

		);
	}
}