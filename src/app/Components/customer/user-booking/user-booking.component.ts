import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { UserService } from 'src/app/services/user.service';
import { BookingModel } from '../../booking/view-booking/booking-model';
import { HotelModel } from '../../hotel/hotel-model';
import { RoomModel } from '../../room/view-room/room-model';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent implements OnInit {
  currentUser:any;
  bookings:BookingModel[] = [];
  user:UserModel = new UserModel(0,'','','','','');
  hotel:HotelModel =  new HotelModel(0,'','','','',0,'','','','');
  rooms:RoomModel[] =  [];
  constructor(private bookingService:BookingService,
              private userService: UserService
    ) {
    this.currentUser =this.userService.getUser() ;
    this.bookingService.getBookingsByUser(this.currentUser.userId).subscribe(
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
