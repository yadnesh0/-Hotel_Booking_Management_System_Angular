import { Component, OnInit } from '@angular/core';
import { HotelModel } from '../hotel-model';
import Swal from 'sweetalert2';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  
  hotelModel = new HotelModel(0,'','','','',0,'','','','');
  cities:string[] = ['Bengaluru','Mumbai','Pune','Hyderabad','Chennai'];
  cityHasError = true;
  constructor(
    private hotelService: HotelService
  ) { 
   
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
    this.hotelService.addHotel(this.hotelModel).subscribe(
      (data:any) => { 
          console.log(data);
          Swal.fire('Registration Successful!!','Hotel Id: '+data.hotelId+'\nHotel Name: '+data.hotelName ,'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Registration Failed','','error');
      }
    );
  }
}
