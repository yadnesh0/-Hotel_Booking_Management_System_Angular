import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModels } from '../user-model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
       private http:HttpClient
        ) { }

  // add User
  public addUser(user:UserModels){
     return this.http.post(`${baseUrl}/user/createUser`,user)
  }

  // user Login
  login(loginData: UserModels){
    return this.http.post(`${baseUrl}/user/login`,loginData);
  }
  //  user Logout
  signOut(){
    return this.http.get(`${baseUrl}/user/logout`);
  }
}
