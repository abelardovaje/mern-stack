import { Router ,Request ,Response ,NextFunction } from 'express';
import * as Model from '../models';
import * as path from 'path';
export class UserController{
	public model:Model.UserModel;
	constructor(){
		this.model = new Model.UserModel();
	}
	
	index(req:Request,res:Response){

		this.model.getUser().then(function(user){
			console.log(user);
			res.sendFile(path.join(__dirname,'../../resources/views', 'login.html'));
		});
		
	}

	login(req:Request,res:Response){
		console.log(req.body);
		res.json(req.body);
	}

}

