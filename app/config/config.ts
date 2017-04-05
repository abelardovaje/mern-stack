import { Router ,Request ,Response ,NextFunction } from 'express';
import * as express  from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as expressSession from 'express-session';
import * as methodOverride from 'method-override';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import * as csurf from 'csurf';

export class Config{
	
	constructor(private app:any){
		
		
		this.staticPaths();
		this.middlewares();

	}

	staticPaths(){		

		console.log(path.join(__dirname, '../resources/assets'));
		this.app.use("/node_modules", express.static(path.join(__dirname, '../../../node_modules')));
		this.app.use("/assets", express.static(path.join(__dirname, '../resources/assets')));
		this.app.use("/dist", express.static(path.join(__dirname, '../resources/assets/dist')));

	}

	middlewares(){
		console.log('middleware loaded');
		this.app.use(cookieParser());
		this.app.use(csurf({cookie:true}));
		this.app.use(helmet());
		this.app.use( bodyParser.json() ); 
		this.app.use(bodyParser.urlencoded({extended:true}));
		this.app.use(methodOverride('X-HTTP-Method-Override'));
		this.app.use(expressSession({
			secret:'secret',
			resave:false,
			saveUninitialized:true
		}));

		this.app.use(function(req:Request, res:Response, next:NextFunction) {

		    res.cookie('XSRF-TOKEN',req.csrfToken());
		    next();

		});

	}

}
