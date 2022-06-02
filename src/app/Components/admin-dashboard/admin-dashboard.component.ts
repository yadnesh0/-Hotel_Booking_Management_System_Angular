import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { LogoutResponse } from './logoutResponse';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  admin = '';

  @Output() loginAcknowlegment= new EventEmitter<LogoutResponse>();
  
  responseStatus:LogoutResponse=<LogoutResponse>{}
  constructor(
    private adminService: AdminService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  
   logout(){
    this.adminService.signOut().subscribe(
      data=>{
        console.log('After logout from spring boot service :- '+data)
        this.responseStatus === data;
        console.log('Response Status '+this.responseStatus.status+" - "+this.responseStatus.adminUsername)
        
        if(this.responseStatus.adminUsername!= 'invalid')
        {
          this.loginAcknowlegment.emit(this.responseStatus);

          if(this.responseStatus)
          {
            Swal.fire('Logout Successful','','success')
            this.router.navigate(['home']);
          }
        }
    
      },
      error=>{
        console.log(error);
        // alert("Invalid details")
        Swal.fire('','','error')
      })
  };

   }

