import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { RoomService } from 'src/app/services/room.service';
import { HotelModel } from '../../hotel/hotel-model';
import { RoomModel } from './room-model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css']
})
export class ViewRoomComponent implements OnInit {
  hotel:HotelModel =  new HotelModel(0,'','','','',0,'','','','');
  room: RoomModel = new RoomModel(0,'','',0,true,this.hotel);
  rooms:RoomModel[] =  [];
  sorts:string[] = ['Price: Low to High','Price: High to Low'];

  editCurrentRoom = false;
  constructor(private roomService:RoomService,
              private hotelService: HotelService,
              private router: Router
            ) {

     this.hotel = this.hotelService.getHotel();
     console.log(this.hotel)
     this.hotelService.getRoomsByHotelId(this.hotel.hotelId).subscribe(
      data => {
      this.rooms = data; 
      console.log(this.rooms)
      })
    
    }

    ngOnInit(): void {
       
    }
     
    deleteRoom(roomId: number){
      this.roomService.deleteRoom(roomId).subscribe(
        (data) => { 
            console.log(data);
            Swal.fire('Room Deleted!!','Room Id: '+roomId,'success');
        },
        error=>{
            Swal.fire('Room Deleted!!','Room Id: '+roomId,'success');
            this.router.navigate(['adminDash/viewroom']);
        });
    } 
    editRoom(room:RoomModel){
      console.log(room);
      this.roomService.setCurrentRoom(room);
      console.log(this.roomService.getCurrentRoom());
      this.router.navigate(['adminDash/roomUpdate']);
    }
    // get room and Hotel
    getRoomDetails(roomId:number){
      this.roomService.getRoom(roomId).subscribe(
        data => {
          this.room = data;
          this.hotel = this.room.hotel;
          console.log(this.room);

        },
        error=>{
  
        });
        console.log
        return this.room;
      ;
    }


    // Sort Rooms
    sortRooms(sort:string){
      if(sort=='Price: Low to High'){
      this.roomService.sortRoomsByPriceAs(this.hotel.hotelId).subscribe(
        data => {
          this.rooms = data;
          console.log(this.rooms);
        },
        error=>{
  
        }
      );}
      else if(sort=='Price: High to Low'){
        this.roomService.sortRoomsByPriceDs(this.hotel.hotelId).subscribe(
          data => {
            this.rooms = data;
            console.log(this.rooms);
          },
          error=>{
    
          }
        );}
    }
  }