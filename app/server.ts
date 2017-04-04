import * as express  from 'express';
import {Config} from './config';
import {Routes} from './http';
import {Database} from './database';
class Server{

	private app:express.Application = express();
	constructor(public port:any){

		this.config()
		.routes().db();

	}

	/*
		Here you can put all your modules
	*/

	private config(){
		new Config(this.app)
		return this;
	}

	/*
		Load all routes
	*/
	private routes(){
		new Routes(this.app);
		return this;
	}


	/*
		Connect to database
	*/
	private db(){
		new Database();
	}

	run(){
		this.app.listen(this.port,()=>{
			console.log('Listening to port:' + this.port);
		});
	}	
}


const server = new Server(9000);
server.run();