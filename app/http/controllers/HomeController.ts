import { Router ,Request ,Response ,NextFunction } from 'express';
import * as Model from '../models';
import * as path from 'path';

export class HomeController{
	public sample:number;
	constructor(){
	 
	}

	index(req:Request,res:Response){
		//res.send('home');
		res.sendFile(path.join(__dirname, '../../resources/views', 'index.html'));
	}
}

