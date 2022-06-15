export class UserModel {
    
        userId:number;
        userName:string;
        email:string;
        password:string;
        mobile:string;
        address:string;

    constructor(
         userId:number,
         userName:string,
         email:string,
         password:string,
         mobile:string,
         address:string,
        ){
            this.userId = userId;
            this.userName = userName;
            this.email = email;
            this.password = password;
            this.mobile = mobile;
            this.address = address;
        }

}
