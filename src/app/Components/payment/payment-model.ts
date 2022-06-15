import { BookingModel } from "../booking/view-booking/booking-model";
import { TransactionModel } from "./transaction-model";

export class PaymentModel{
    paymentId:number;
    transactions:TransactionModel;
    booking:BookingModel;
    
constructor(
    paymentId:number,
    transactions:TransactionModel,
    booking:BookingModel,
){ 
     this.paymentId = paymentId;
     this.transactions = transactions;
     this.booking = booking;
}
}  