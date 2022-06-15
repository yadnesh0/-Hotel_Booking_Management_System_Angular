import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { RoomService } from 'src/app/services/room.service';
import { HotelModel } from '../../hotel/hotel-model';
import { RoomModel } from '../view-room/room-model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  hotel = new HotelModel(0,'','','','',0,'','','','')
  roomModel = new RoomModel(0,'','',0,true,this.hotel);
  hotels:HotelModel []= [];
  hotelHasError = true;

  constructor(
    private roomService: RoomService,
    private hotelService: HotelService
  ) {
    this.hotelService.getAllHotels().subscribe(
      data => {
        this.hotels = data;
        console.log(this.hotels);
      },
      error=>{

      }
    );
   }

  ngOnInit(): void {
  }
  validateHotel(hotelId:number){
    if(hotelId <= 0){
       this.hotelHasError = true;
    } else{
      this.hotelHasError = false;
    }
   
  }
  getHotels(){
    this.hotelService.getAllHotels().subscribe(
      data => {
        this.hotels = data;
        console.log(this.hotels);
      },
      error=>{

      }
    );
  }
  room(){
    console.log(this.roomModel)
    this.roomService.addRoom(this.roomModel).subscribe(
      (data:any) => { 
          console.log(data);
          Swal.fire('Registration Successful!!','Room Id: '+data.roomId+'\nRoom No: '+data.roomNo ,'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Registration Failed','','error');
      }
    );
  }

}
