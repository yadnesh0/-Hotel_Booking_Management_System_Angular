import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingModel } from '../Components/booking/view-booking/booking-model';
import { UserModel } from '../Components/customer/user-model';
import { HotelModel } from '../Components/hotel/hotel-model';
import { RoomModel } from '../Components/room/view-room/room-model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  // View Bookings
  public getAllBookings(){
    return this.http.get<BookingModel[]>(`${baseUrl}/booking/list`)
  }
  // View Rooms By Booking Id
  public getAllRoomsByBooking(bookingId:number){
    return this.http.get<RoomModel[]>(`${baseUrl}/booking/rooms/${bookingId}`)
  }
  // View User By Booking Id
  public getUserByBooking(bookingId:number){
    return this.http.get<UserModel>(`${baseUrl}/booking/user/${bookingId}`)
  }
  // View User By Booking Id
  public getHotelByBooking(bookingId:number){
    return this.http.get<HotelModel>(`${baseUrl}/booking/hotel/${bookingId}`)
  }
  // Add Booking 
  public addBooking(booking:BookingModel){
    return this.http.post<BookingModel>(`${baseUrl}/booking/createBooking`,booking)
  }
  // get bookings by UserId
  public getBookingsByUser(userId:number){
    return this.http.get<BookingModel[]>(`${baseUrl}/booking/bookingsByUser/${userId}`)
  }

   // set Current Booking
   public setCurrentBooking(booking:BookingModel) {
    localStorage.setItem('booking', JSON.stringify(booking));
  }
  
  // get Current Booking
  public getCurrentBooking() {
    let bookingStr = localStorage.getItem('booking');
    if (bookingStr != null) {
      return JSON.parse(bookingStr);
    }
  }
}
