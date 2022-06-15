import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { PaymentService } from 'src/app/services/payment.service';
import { UserService } from 'src/app/services/user.service';
import { BookingModel } from '../../booking/view-booking/booking-model';
import { HotelModel } from '../../hotel/hotel-model';
import { PaymentModel } from '../../payment/payment-model';
import { TransactionModel } from '../../payment/transaction-model';
import { RoomModel } from '../../room/view-room/room-model';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {

  payments:PaymentModel[] =  [];
  transactions:TransactionModel = new TransactionModel(0,0);
  user:UserModel = new UserModel(0,'','','','','');
  hotel:HotelModel =  new HotelModel(0,'','','','',0,'','','','');
  room: RoomModel = new RoomModel(0,'','',0,true,this.hotel);
  rooms:RoomModel[] =  [];
  booking:BookingModel = new BookingModel(0,new Date(),new Date(),0,0,0,this.user,this.hotel,this.rooms) ;
  currentUser:any;
  constructor(
    private paymentService: PaymentService,
    private bookingService: BookingService,
    private userService: UserService
    ) { 
    this.currentUser =this.userService.getUser() ;
    this.paymentService.getPaymentsByUserId(this.currentUser.userId).subscribe(
      data => {
        this.payments = data;
        console.log(this.payments);
      },
      error=>{

      }
    );
  }

  ngOnInit(): void {
  }
  getBookingPay(paymentId:number){
    this.paymentService.getBooking(paymentId).subscribe(
      data => {
        this.booking = data;
        console.log(this.booking);
      },
      error=>{

      }
    );
  }
  getTransactionPay(paymentId:number){
    this.paymentService.getTransaction(paymentId).subscribe(
      data => {
        this.transactions = data;
        console.log(this.transactions);
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

}
