import { HotelModel } from "../../hotel/hotel-model";

export class RoomModel{
    roomId:number;
    roomNo:string;
    roomType:string;
    ratePerDay:number;
    available:boolean;
    hotel:HotelModel;
   
constructor(
    roomId:number,
    roomNo:string,
    roomType:string,
    ratePerDay:number,
    available:boolean,
    hotel:HotelModel
    ){ 
     this.roomId = roomId;
     this.roomNo = roomNo
     this.roomType = roomType
     this.ratePerDay = ratePerDay;
     this.available = available;
     this.hotel = hotel;
}
}  