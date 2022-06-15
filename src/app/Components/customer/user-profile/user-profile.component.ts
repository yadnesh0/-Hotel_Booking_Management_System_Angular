import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:any;
  constructor(private userService: UserService,
              private router: Router
    ) {
    this.user = this.userService.getUser() ;
   }

  ngOnInit(): void {
  }

  editUser(user:UserModel){
    console.log(user);
    this.userService.setUser(user);
    console.log(this.userService.getUser());
    this.router.navigate(['welcome/updateUser']);
  }
}
