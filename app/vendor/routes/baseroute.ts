
export class BaseRoute{
		
		constructor(public app:any){
			
				console.log('route constructor');	
		};

		router(){
			return this;
		}

		get(url:string,controller:any,method:any){	
			let CRTL = new controller();
			this.app.get(url,CRTL[method].bind(CRTL));						
		}

		post(url:string,controller:any,method:string){
			let CRTL = new controller();
			this.app.post(url,CRTL[method].bind(CRTL));			
		}

}	


