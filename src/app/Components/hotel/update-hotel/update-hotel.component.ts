import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import Swal from 'sweetalert2';
import { HotelModel } from '../hotel-model';
@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {

  hotelModel = new HotelModel(0,'','','','',0,'','','','');
  cities:string[] = ['Bengaluru','Mumbai','Pune','Hyderabad','Chennai'];
  cityHasError = true;
  constructor(
    private hotelService: HotelService
  ) { 
   this.hotelModel = this.hotelService.getHotel();
  }

  ngOnInit(): void {
  }
  validateCity(value:string){
    if(value === 'default'){
       this.cityHasError = true;
    } else{
      this.cityHasError = false;
    }
  }
  hotel(){
    this.hotelService.updateHotel(this.hotelModel).subscribe(
      (data:any) => { 
          console.log(data);
          Swal.fire('Updated Successfully !!','Hotel Id: '+data.hotelId+'\nHotel Name: '+data.hotelName ,'success');
          this.hotelService.setHotel(data);
      },
      (error) => {
        console.log(error);
        Swal.fire('Updation Failed','','error');
      }
    );
  }
}
