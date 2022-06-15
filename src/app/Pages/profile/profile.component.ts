import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminModel } from 'src/app/admin-model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  admin:any;
  constructor(private adminService: AdminService,
              private router: Router
    ) {
    this.admin =this.adminService.getAdmin() ;
   }

  ngOnInit(): void {
  }

  editAdmin(admin:AdminModel){
    console.log(admin);
    this.adminService.setAdmin(admin);
    console.log(this.adminService.getAdmin());
    this.router.navigate(['adminDash/updateAdmin']);
  }

}
