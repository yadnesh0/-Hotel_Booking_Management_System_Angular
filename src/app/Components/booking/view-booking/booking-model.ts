
import { UserModel } from "../../customer/user-model";
import { HotelModel } from "../../hotel/hotel-model";
import { RoomModel } from "../../room/view-room/room-model";

export class BookingModel{
    bookingId:number;
    bookedFrom:Date;
    bookedTo:Date;
    noOfAdults:number;
    noOfChildren:number;
    amount:number;
    users:UserModel;
    hotel:HotelModel;
    rooms:RoomModel[];

constructor(
    bookingId:number,
    bookedFrom:Date,
    bookedTo:Date,
    noOfAdults:number,
    noOfChildren:number,
    amount:number,
    users:UserModel,
    hotel:HotelModel,
    rooms:RoomModel[],
    ){ 
     this.bookingId = bookingId;
     this.bookedFrom = bookedFrom;
     this.bookedTo = bookedTo;
     this.noOfAdults = noOfAdults;
     this.noOfChildren = noOfChildren;
     this.amount = amount;
     this.users = users;
     this.hotel = hotel;
     this.rooms = rooms;
}
}  