import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AdminDetails } from '../add-admin/adminDetails';

@Component({
  selector: 'app-view-admins',
  templateUrl: './view-admins.component.html',
  styleUrls: ['./view-admins.component.css']
})
export class ViewAdminsComponent implements OnInit {
  admins:AdminDetails[] = [];
  constructor(private service:AdminService) {
    this.service.getAllAdmins().subscribe(
      data=>{
        this.admins = data;
        console.log(this.admins);
      },
      error=>{

      }
    );

   }

  ngOnInit(): void {
  }

}
