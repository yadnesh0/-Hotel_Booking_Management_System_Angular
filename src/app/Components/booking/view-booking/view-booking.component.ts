import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { UserModel } from '../../customer/user-model';
import { HotelModel } from '../../hotel/hotel-model';
import { RoomModel } from '../../room/view-room/room-model';
import { BookingModel } from './booking-model';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  bookings:BookingModel[] = [];
  user:UserModel = new UserModel(0,'','','','','');
  hotel:HotelModel =  new HotelModel(0,'','','','',0,'','','','');
  rooms:RoomModel[] =  [];
  constructor(private bookingService:BookingService) {
    this.bookingService.getAllBookings().subscribe(
      data => {
        this.bookings = data;
        console.log(this.bookings);
      },
      error=>{

      }
      );
   }

  ngOnInit(): void {
  }

  getRoomsByBooking(bookingId:number){
    this.bookingService.getAllRoomsByBooking(bookingId).subscribe(
      data => {
      this.rooms =[];
      this.rooms = data;
      console.log(this.rooms);
    },
    error=>{

    }
  );
  } 

  getUserByBooking(bookingId:number){
    this.bookingService.getUserByBooking(bookingId).subscribe(
      data => {
      this.user = new UserModel(0,'','','','','');
      this.user = data;
      console.log(this.rooms);
    },
    error=>{

    }
  );
  } 

  getHotelByBooking(bookingId:number){
    this.bookingService.getHotelByBooking(bookingId).subscribe(
      data => {
      this.hotel = new HotelModel(0,'','','','',0,'','','','');
      this.hotel = data;
      console.log(this.rooms);
    },
    error=>{

    }
  );
  } 
}
