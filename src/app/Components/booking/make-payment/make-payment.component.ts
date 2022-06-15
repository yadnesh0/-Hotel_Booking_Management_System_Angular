import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { UserModel } from '../../customer/user-model';
import { HotelModel } from '../../hotel/hotel-model';
import { PaymentModel } from '../../payment/payment-model';
import { TransactionModel } from '../../payment/transaction-model';
import { RoomModel } from '../../room/view-room/room-model';
import { BookingModel } from '../view-booking/booking-model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
  enabled:any
  amount:any;
  user = new UserModel(0,'','','','','');
  hotel =  new HotelModel(0,'','','','',0,'','','','');
  room = new RoomModel(0,'','',0,true,this.hotel);
  rooms:RoomModel[] =  [];
  booking = new BookingModel(0,new Date(),new Date(),0,0,0,this.user,this.hotel,this.rooms);
  transaction = new TransactionModel(0,0);
  payment = new PaymentModel(0,this.transaction,this.booking)
  constructor(
    private bookingService: BookingService,
    private router: Router
  ) { 
    this.payment.booking = this.bookingService.getCurrentBooking();
    this.amount = this.payment.booking.amount;
   }
  
   handler:any = null;
 
   ngOnInit() {
    this.loadStripe();
  }
  book(){
    this.booking = this.bookingService.getCurrentBooking();
    this.bookingService.addBooking(this.booking).subscribe(
      (data:any) => { 
          this.booking = data;
          console.log( this.booking);
          Swal.fire('Booking Successful!!','Booking Id: '+data.bookingId ,'success');
          this.router.navigate(['welcome']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Booking Failed','','error');
      }
    );
  
  }

  pay() {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        Swal.fire('Payment Successful!!','','success');
      }
     
    });
    
    handler.open({
      name: 'HBMS',
      description: '2 widgets',
      amount: this.amount*100
    });
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}
