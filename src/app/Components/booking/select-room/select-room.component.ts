import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { HotelService } from 'src/app/services/hotel.service';
import { RoomService } from 'src/app/services/room.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { HotelModel } from '../../hotel/hotel-model';
import { RoomModel } from '../../room/view-room/room-model';
import { BookingModel } from '../view-booking/booking-model';
@Component({
  selector: 'app-select-room',
  templateUrl: './select-room.component.html',
  styleUrls: ['./select-room.component.css']
})
export class SelectRoomComponent implements OnInit {
  
  hotel:HotelModel =  new HotelModel(0,'','','','',0,'','','','');
  room: RoomModel = new RoomModel(0,'','',0,true,this.hotel);
  rooms:RoomModel[] =  [];
  sorts:string[] = ['Price: Low to High','Price: High to Low'];

  constructor(private roomService:RoomService,
              private hotelService: HotelService,
              private router: Router
            ) {

     this.hotel = this.hotelService.getHotel();
     console.log(this.hotel)
     this.hotelService.getRoomsByHotelId(this.hotel.hotelId).subscribe(
      data => {
      this.rooms = data; 
      console.log(this.rooms)
      })
    
    }

    ngOnInit(): void {
       
    }
     
     
    // get room and Hotel
    getRoomDetails(roomId:number){
      this.roomService.getRoom(roomId).subscribe(
        data => {
          this.room = data;
          this.hotel = this.room.hotel;
          console.log(this.room);
        },
        error=>{
  
        });
        console.log
        return this.room;
      ;
    }
    // Proceed to Booking
    proccedToBook(room:RoomModel){
      this.roomService.getRoom(room.roomId).subscribe(
        data => {
  
        this.room = data;
    
        console.log(this.rooms);
        this.roomService.setCurrentRoom(this.room)
        this.router.navigate(['addBooking']);
      },
      error=>{
  
      }
    );
    }

    // Sort Rooms
    sortRooms(sort:string){
      if(sort=='Price: Low to High'){
      this.roomService.sortRoomsByPriceAs(this.hotel.hotelId).subscribe(
        data => {
          this.rooms = data;
          console.log(this.rooms);
        },
        error=>{
  
        }
      );}
      else if(sort=='Price: High to Low'){
        this.roomService.sortRoomsByPriceDs(this.hotel.hotelId).subscribe(
          data => {
            this.rooms = data;
            console.log(this.rooms);
          },
          error=>{
    
          }
        );}
    }

}
