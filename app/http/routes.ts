import {BaseRoute} from "../vendor/routes";
import * as C from './controllers';

export class Routes extends BaseRoute{
	
	constructor(public app:any){
		super(app);
		this.init();
	}

	/*
		Initialize routes
	*/
	
	init(){
						
		let router = this.router();
		
		router.get('/',C.UserController,'index');
		router.get('/home',C.HomeController,'index');
		router.get('/about',C.AboutController,'index');
		router.post('/login',C.UserController,'login');
			
	}

}