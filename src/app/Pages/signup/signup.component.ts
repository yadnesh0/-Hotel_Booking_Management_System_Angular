import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {  UserModels } from 'src/app/user-model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userModel = new UserModels('','','','','');

  constructor(
          private userService:UserService) { }

  ngOnInit(): void {
  }

  register(){
    this.userService.addUser(this.userModel).subscribe(
      (data:any) => { 
          console.log(data);
          Swal.fire('Registration Successful!!','User Id: '+data.userId,'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Registration Failed','','error');
      }
    );
  }
   
}
