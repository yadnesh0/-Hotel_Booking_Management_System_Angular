import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AdminDetails } from '../add-admin/adminDetails';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  admin = new AdminDetails(0,'','');
  constructor(
    private adminService: AdminService
  ) { 
    this.admin = this.adminService.getAdmin();
  }

  ngOnInit(): void {
  }
  // add Admin
  updateAdmin(){
    this.adminService.updateAdmin(this.admin).subscribe(
      (data:any) => { 
          console.log(data);
          Swal.fire('Admin Updated Successfully!!','Admin Id: '+this.admin.adminId,'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Updation Failed','','error');
      }
    );
  }
}
