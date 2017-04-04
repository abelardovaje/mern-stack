import {UserSchema} from './UserSchema';
export class UserModel{
	constructor(){
		
	}

	getUser(){
		return UserSchema.find({},function(err,user){
			return user;
		});	
	}

	register(){
		
		// let user = new UserSchema;

	}
}