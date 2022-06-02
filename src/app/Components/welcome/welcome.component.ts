import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { UserLogoutResponse } from './UserLogoutResponse';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
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
