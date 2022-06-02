import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserModels } from 'src/app/user-model';
import { UserLoginResponseDetails } from './UserLoginResponseDetails';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userModel = new UserModels('','','','','');
  
  @Output() loginAcknowlegment= new EventEmitter<UserLoginResponseDetails>();
  
  responseStatus:UserLoginResponseDetails=<UserLoginResponseDetails>{}

  constructor(
       private userService: UserService,
       private router: Router
  ) { }

  ngOnInit(): void {
  }

  dologin(){
    console.log("Login Button clicked")
    
    console.log('inside do login '+this.userModel);
    console.log(this.userModel.userName+' - '+this.userModel.password)

    this.userService.login(this.userModel).subscribe(
      data=>{
        console.log('After login from spring boot service :- '+data)
        this.responseStatus === data;
        console.log('Response Status '+this.responseStatus.status+" - "+this.responseStatus.userName)
        
        if(this.responseStatus.userName!= 'invalid')
        {
          this.loginAcknowlegment.emit(this.responseStatus);

          if(this.responseStatus)
          {
            Swal.fire('Login Successful','Welcome '+this.userModel.userName,'success')
            this.router.navigate(['welcome']);
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
