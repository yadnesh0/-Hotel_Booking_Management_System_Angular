import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { UserModel } from 'src/app/Components/customer/user-model';
import { first } from 'rxjs';
import { UserLoginResponseDetails } from './UserLoginResponseDetails';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userModel = new UserModel(0,'','','','','');
  user :any;
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
        // this.responseStatus === data;
        this.user = data;
        console.log(this.user);
        console.log('Response Status '+this.responseStatus.status+" - "+this.responseStatus.userName)
        console.log(this.user)
        this.userService.setUser(this.user);
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
    }
}
