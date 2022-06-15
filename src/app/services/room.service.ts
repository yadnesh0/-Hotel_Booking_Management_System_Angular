import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotelModel } from '../Components/hotel/hotel-model';
import { RoomModel } from '../Components/room/view-room/room-model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private http:HttpClient
  ) { }
  // Add Room
  public addRoom(room:RoomModel){
    return this.http.post<RoomModel>(`${baseUrl}/room/createRoom`,room)
  }
  // View All Rooms
  public getAllRooms(){
    return this.http.get<RoomModel[]>(`${baseUrl}/room/listRooms`)
  }
  // View Rooms By Hotel
  public getRoomsByHotel(hotelId:number){
    return this.http.get<RoomModel[]>(`${baseUrl}/room/roomsByHotel/${hotelId}`)
  }
  //Sort Rooms By Price Low
  public sortRoomsByPriceAs(hotelId:number){
    return this.http.get<RoomModel[]>(`${baseUrl}/room/priceAs/${hotelId}`)
  }
  //Sort Rooms By Price High
  public sortRoomsByPriceDs(hotelId:number){
    return this.http.get<RoomModel[]>(`${baseUrl}/room/priceDs/${hotelId}`)
  }

  //Get Hotel By Room 
  public getHotelByRoom(roomId:number){
    return this.http.get<HotelModel>(`${baseUrl}/room/hotel/${roomId}`)
  }
  // Get Room By Id
  public getRoom(roomId:number){
    return this.http.get<RoomModel>(`${baseUrl}/room/getRoomById/${roomId}`)
  }

   // set Current Room
   public setCurrentRoom(room:RoomModel) {
    localStorage.setItem('room', JSON.stringify(room));
  }
  
  // get Current Room
  public getCurrentRoom() {
    let roomStr = localStorage.getItem('room');
    if (roomStr != null) {
      return JSON.parse(roomStr);
    }
  }

  // Delete Room By Id
  public deleteRoom(roomId:number){
    return this.http.delete(`${baseUrl}/room/deletedById/${roomId}`)
  }

  // update Room
  public updateRoom(room:RoomModel){
    return this.http.put<RoomModel>(`${baseUrl}/room/updateRoom`,room)
  }
}
