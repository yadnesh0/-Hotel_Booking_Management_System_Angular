import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Components/customer/user-model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userModel = new UserModel(0,'','','','','');

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
