import * as React from 'react';


export class Chat extends React.Component<any,any>{

	constructor(){
		super();
	}


	render(){
		return(
			<div className="chat-container">
				<div className="row">

					<div className="col-lg-2">
						<div className="title">
							Online
						</div>

						<div className="user-list">
							<ul>
								<li>User</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-10">

						<div className="chat-timeline">

						</div>

						<div className="chat-message-box">
							<div className="col-lg-10 input-message">
								<input type="text" placeholder="Write here..."/>
							</div>
							<div className="col-lg-2 send-message">

							</div>
						</div>

					</div>

				</div>
			</div>
		);
	}

}