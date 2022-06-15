import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { UserModel } from '../customer/user-model';
import { UserLogoutResponse } from '../welcome/UserLogoutResponse';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() loginAcknowlegment= new EventEmitter<UserLogoutResponse>();
  
  responseStatus:UserLogoutResponse=<UserLogoutResponse>{}

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.userService.signOut().subscribe(
      data=>{
        console.log('After logout from spring boot service :- '+data)
        this.responseStatus === data;
        console.log('Response Status '+this.responseStatus.status+" - "+this.responseStatus.userName)
        
        if(this.responseStatus.userName!= 'invalid')
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
