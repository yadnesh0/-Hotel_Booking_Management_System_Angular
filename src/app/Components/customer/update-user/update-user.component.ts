import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userModel = new UserModel(0,'','','','','');

  constructor(
          private userService:UserService) { 
          this.userModel = this.userService.getUser();
          }

  ngOnInit(): void {
  }

  editUser(){
    this.userService.updateUser(this.userModel).subscribe(
      (data:any) => { 
          console.log(data);
          Swal.fire('Updated Successfully!!','User Id: '+data.userId,'success');
          this.userService.setUser(data);
      },
      (error) => {
        console.log(error);
        Swal.fire('Updation Failed','','error');
      }
    );
  }
}
