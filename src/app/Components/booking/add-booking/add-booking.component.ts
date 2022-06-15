import { Component, Input, OnInit } from '@angular/core';
import { UserLoginComponent } from 'src/app/Pages/user-login/user-login.component';
import { BookingService } from 'src/app/services/booking.service';
import { HotelService } from 'src/app/services/hotel.service';
import { RoomService } from 'src/app/services/room.service';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from '../../customer/user-model';
import { HotelModel } from '../../hotel/hotel-model';
import { RoomModel } from '../../room/view-room/room-model';
import { BookingModel } from '../view-booking/booking-model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  minDate:any = "";
  maxDate:any = "2022-08-31";

  user:UserModel = new UserModel(0,'','','','','');
  hotel:HotelModel =  new HotelModel(0,'','','','',0,'','','','');
  room: RoomModel = new RoomModel(0,'','',0,true,this.hotel);
  rooms:RoomModel[] =  [];
  booking:BookingModel = new BookingModel(0,new Date(),new Date(),0,0,0,this.user,this.hotel,this.rooms) ;
  rateDay:any;
  days = 1;
  roomHasError = true;
  userHasError = true;

  // date1 = ''
  // date2 = ''
  enabled = false;
  constructor(private roomService:RoomService,
             private bookingService:BookingService,
             private hotelService: HotelService,
             private userService: UserService,
             private payService: PaymentService,
             private router: Router
           ) {}
  
  
    ngOnInit() {
      this.getDate();
    }   
    
    getDifferenceInDays(date1:Date, date2:Date) {
      var time = date1.getTime() - date2.getTime();
      return time / (1000 * 60 * 60 * 24);
    }

    getDate(){
      var date:any = new Date();
      var toDate:any = date.getDate();
      if(toDate < 10){
        toDate = '0'+ toDate;
      }
      var month:any = date.getMonth() +1 ;
      if(month < 10){
        month = '0'+ month;
      }
      var year = date.getFullYear();
      this.minDate = year+"-"+month+"-"+toDate;
    }
    // parse to date
    parseDate(input:any) {
      var parts = input.match(/(\d+)/g);
      // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
      return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
    }
    // calculate amount
    calculate(from:Date,to:Date){
      this.room = this.roomService.getCurrentRoom();
      console.log(this.room)
      this.rateDay = this.room.ratePerDay;
      if(this.parseDate(to)>this.parseDate(from)){
        this.days =this.getDifferenceInDays(this.parseDate(to),this.parseDate(from));
         if(this.days==0)
           this.days = 1;
         console.log(this.days)
        this.booking.amount = this.days*this.rateDay;
        console.log(this.booking.amount)
      }
      
    }
    // transact
    transaction(){
     this.booking.hotel= this.hotelService.getHotel();
     this.room = this.roomService.getCurrentRoom();
     this.rooms.push(this.room);
     this.booking.users = this.userService.getUser();
     this.bookingService.setCurrentBooking(this.booking);
     console.log(this.booking);
     this.router.navigate(['makePayment']);
    }

    afterBook(){
        this.bookingService.addBooking(this.booking).subscribe(
          data => {
            this.booking = data;
            console.log(this.booking);
            Swal.fire('Booking Successful!!','Booking Id: '+data.bookingId,'success');
          },
          error=>{
            Swal.fire('Booking Failed','','error');
          }
        );
    }

    
    }


      
      
  

    
    
