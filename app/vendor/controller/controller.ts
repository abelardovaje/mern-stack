export interface ControllerConstructor{
	new (hour:number,minute:number):IController;
}

export interface IController{
	[propName: string]: any;
	index(req:any,res:any):void;	
}


