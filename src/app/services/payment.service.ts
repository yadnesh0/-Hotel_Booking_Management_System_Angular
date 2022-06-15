import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingModel } from '../Components/booking/view-booking/booking-model';
import { PaymentModel } from '../Components/payment/payment-model';
import { TransactionModel } from '../Components/payment/transaction-model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http:HttpClient
  ) { }
   
  public getAllPayments(){
    return this.http.get<PaymentModel[]>(`${baseUrl}/payment/`)
  }
  
  public getTransaction(paymentId:number){
    return this.http.get<TransactionModel>(`${baseUrl}/payment/transaction/${paymentId}`)
  }

  public getBooking(paymentId:number){
    return this.http.get<BookingModel>(`${baseUrl}/payment/booking/${paymentId}`)
  }
  public getPaymentsByUserId(userId:number){
    return this.http.get<PaymentModel[]>(`${baseUrl}/payment/user/${userId}`)
  }
  
}  
