import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserModel } from '../Components/customer/user-model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public loginStatusSubject = new Subject<boolean>();
  constructor(
       private http:HttpClient
        ) { }
  
  //login user: set username in localStorage
  public loginUser(userName: string) {
    localStorage.setItem('userName', userName);
    return true;
  }
  // set User
  public setUser(user:UserModel) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  // get User
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }
  //isLogin: user is logged in or not
  public isLoggedIn() {
    let userNameStr = localStorage.getItem('userName');
    if ( userNameStr == undefined ||  userNameStr == '' ||  userNameStr == null) {
      return false;
    } else {
      return true;
    }
  }
   // logout : remove token from local storage
   public logout() {
    localStorage.removeItem('user');
    return true;
  }
  // add User
  public addUser(user:UserModel){
     return this.http.post(`${baseUrl}/user/createUser`,user)
  }

  // Update User
  public updateUser(user:UserModel){
    return this.http.put(`${baseUrl}/user/updateUser`,user)
 }

  // user Login
  login(loginData: UserModel){
    return this.http.post(`${baseUrl}/user/login`,loginData);
  }

  
  //  user Logout
  signOut(){
    return this.http.get(`${baseUrl}/user/logout`);
  }
  // Get User By Username
  getUserByName(userName:string){
    return this.http.get<UserModel>(`${baseUrl}/user/getByUserName/{userName}`);
  }
}


