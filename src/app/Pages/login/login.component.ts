import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdminModel } from 'src/app/admin-model';
import { AdminService } from 'src/app/services/admin.service';
import { LoginResponseDetails } from './LoginResponseDetails';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminModel = new AdminModel('','');
  
  @Output() loginAcknowlegment= new EventEmitter<LoginResponseDetails>();
  
  responseStatus:LoginResponseDetails=<LoginResponseDetails>{}

  constructor(
       private adminService: AdminService,
       private router: Router
  ) { }

  ngOnInit(): void {
  }

  dologin(){
    console.log("Login Button clicked")
    
    console.log('inside do login '+this.adminModel);
    console.log(this.adminModel.adminUsername+' - '+this.adminModel.adminpassword)

    this.adminService.login(this.adminModel).subscribe(
      data=>{
        console.log('After login from spring boot service :- '+data)
        this.responseStatus === data;
        console.log('Response Status '+this.responseStatus.status+" - "+this.responseStatus.adminUsername)
        
        if(this.responseStatus.adminUsername!= 'invalid')
        {
          this.loginAcknowlegment.emit(this.responseStatus);

          if(this.responseStatus)
          {
            Swal.fire('Login Successful','Welcome '+this.adminModel.adminUsername,'success')
            this.router.navigate(['adminDash']);
          }
        }
    
      },
      error=>{
        console.log(error);
        // alert("Invalid details")
        Swal.fire('Invalid Credentials','Login Failed','error')
      })
  };

}
