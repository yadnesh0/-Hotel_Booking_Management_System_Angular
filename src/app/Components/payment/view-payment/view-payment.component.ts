import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { PaymentService } from 'src/app/services/payment.service';
import { BookingModel } from '../../booking/view-booking/booking-model';
import { UserModel } from '../../customer/user-model';
import { HotelModel } from '../../hotel/hotel-model';
import { RoomModel } from '../../room/view-room/room-model';
import { PaymentModel } from '../payment-model';
import { TransactionModel } from '../transaction-model';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent implements OnInit {
  payments:PaymentModel[] =  [];
  transactions:TransactionModel = new TransactionModel(0,0);
  user:UserModel = new UserModel(0,'','','','','');
  hotel:HotelModel =  new HotelModel(0,'','','','',0,'','','','');
  room: RoomModel = new RoomModel(0,'','',0,true,this.hotel);
  rooms:RoomModel[] =  [];
  booking:BookingModel = new BookingModel(0,new Date(),new Date(),0,0,0,this.user,this.hotel,this.rooms) ;
  
  constructor(
    private paymentService: PaymentService,
    private bookingService: BookingService
    ) { 
    this.paymentService.getAllPayments().subscribe(
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
