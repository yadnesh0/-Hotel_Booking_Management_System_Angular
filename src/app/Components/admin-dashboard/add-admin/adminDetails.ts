export class AdminDetails{

    public adminId:number;
    public adminUsername:string;
    public adminpassword:string;
    constructor(
         adminId:number,
         adminUsername:string,
         adminpassword:string,
        ){
            this.adminId = adminId;
            this.adminUsername = adminUsername;
            this.adminpassword = adminpassword;
        }

}