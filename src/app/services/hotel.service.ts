import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotelModel } from '../Components/hotel/hotel-model';
import { RoomModel } from '../Components/room/view-room/room-model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    private http:HttpClient
  ) { }
  
  // Add Hotel
  public addHotel(hotel:HotelModel){
    return this.http.post(`${baseUrl}/hotel/createHotel`,hotel)
  }

   // Update Hotel
   public updateHotel(hotel:HotelModel){
    return this.http.put(`${baseUrl}/hotel/updateHotel`,hotel)
  }

  // View Hotels
  public getAllHotels(){
    return this.http.get<HotelModel[]>(`${baseUrl}/hotel/ListHotel`)
  }
  //Sort Rooms By Price Low
  public sortHotelsByPriceAs(){
    return this.http.get<HotelModel[]>(`${baseUrl}/hotel/priceAs`)
  }
  //Sort Rooms By Price High
  public sortHotelsByName(){
    return this.http.get<HotelModel[]>(`${baseUrl}/hotel/nameAs`)
  }
  public filterHotelsByName(filt:string){
    return this.http.get<HotelModel[]>(`${baseUrl}/hotel/filter/${filt}`)
  }

  //get Rooms By Hotel
  public getRoomsByHotelId(hotelId:number){
    return this.http.get<RoomModel[]>(`${baseUrl}/hotel/roomByHotel/${hotelId}`)
  }

  // set Hotel
  public setHotel(hotel:HotelModel) {
    localStorage.setItem('hotel', JSON.stringify(hotel));
  }
  // get Hotel
  public getHotel() {
    let hotelStr = localStorage.getItem('hotel');
    if (hotelStr != null) {
      return JSON.parse(hotelStr);
  }
  }
}
