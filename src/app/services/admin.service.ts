import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AdminModel } from '../admin-model';
import { AdminDetails } from '../Components/admin-dashboard/add-admin/adminDetails';
import { LoginResponseDetails } from '../Pages/login/LoginResponseDetails';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(
    private http:HttpClient
  ) { }

  //login user: set username in localStorage
  public loginAdmin(adminUsername: string) {
    localStorage.setItem('adminUsername', adminUsername);
    return true;
  }
  // set User
  public setAdmin(admin:AdminModel) {
    localStorage.setItem('admin', JSON.stringify(admin));
  }
  // get User
  public getAdmin() {
    let adminStr = localStorage.getItem('admin');
    if (adminStr != null) {
      return JSON.parse(adminStr);
    } else {
      this.logout();
      return null;
    }
  }
  //isLogin: user is logged in or not
  public isLoggedIn() {
    let adminUsernameStr = localStorage.getItem('adminUsername');
    if ( adminUsernameStr == undefined ||  adminUsernameStr == '' ||  adminUsernameStr == null) {
      return false;
    } else {
      return true;
    }
  }
   // logout : remove token from local storage
   public logout() {
    localStorage.removeItem('admin');
    return true;
  }
  // Admin Login
  login(loginData: AdminModel){
    return this.http.post<AdminModel>(`${baseUrl}/admin/login`,loginData);
  }

  //  Admin Logout
   signOut(){
     return this.http.get(`${baseUrl}/admin/logout`);
   }
  
  // Add Admin
  addAdmin(admin:AdminDetails){
    return this.http.post(`${baseUrl}/admin/add`,admin);
  }

  // Update Admin
  updateAdmin(admin:AdminDetails){
    return this.http.put(`${baseUrl}/admin/update`,admin);
  }

  // View All Admins
  getAllAdmins():Observable<AdminDetails[]>{
    return this.http.get<AdminDetails[]>(`${baseUrl}/admin/`);
  }


}
