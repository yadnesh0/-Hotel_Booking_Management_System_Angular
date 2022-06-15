import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { RoomService } from 'src/app/services/room.service';
import Swal from 'sweetalert2';
import { HotelModel } from '../../hotel/hotel-model';
import { RoomModel } from '../view-room/room-model';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {
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
    this.roomModel = this.roomService.getCurrentRoom()
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
    this.roomService.updateRoom(this.roomModel).subscribe(
      (data:any) => { 
          console.log(data);
          Swal.fire('Room Details Updated!!','Room Id: '+data.roomId+'\nRoom No: '+data.roomNo ,'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Updation Failed','','error');
      }
    );
  }


}
