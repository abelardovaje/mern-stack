import { Router ,Request ,Response ,NextFunction } from 'express';
import * as Model from '../models';
import * as path from 'path';

export class AboutController{
	constructor(){

	}

	index(req:Request,res:Response){
		res.sendFile(path.join(__dirname,'../../resources/views','about.html'));
	}
}