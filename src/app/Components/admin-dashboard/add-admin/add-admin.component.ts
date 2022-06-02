import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AdminDetails } from './adminDetails';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  
  admin = new AdminDetails(0,'','');
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
  }
  // add Admin
  registerAdmin(){
    this.adminService.addAdmin(this.admin).subscribe(
      (data:any) => { 
          console.log(data);
          Swal.fire('Admin Added Successfully!!','Admin Id: '+this.admin.adminId,'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Registration Failed','','error');
      }
    );
  }

}
