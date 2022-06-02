import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminModel } from '../admin-model';
import { AdminDetails } from '../Components/admin-dashboard/add-admin/adminDetails';
import { LoginResponseDetails } from '../Pages/login/LoginResponseDetails';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http:HttpClient
  ) { }

  // Admin Login
  login(loginData: AdminModel){
    return this.http.post(`${baseUrl}/admin/login`,loginData);
  }

  //  Admin Logout
   signOut(){
     return this.http.get(`${baseUrl}/admin/logout`);
   }

  // Add Admin
  addAdmin(admin:AdminDetails){
    return this.http.post(`${baseUrl}/admin/add`,admin);
  }

  // View All Admins
  getAllAdmins():Observable<AdminDetails[]>{
    return this.http.get<AdminDetails[]>(`${baseUrl}/admin/`);
  }


}
