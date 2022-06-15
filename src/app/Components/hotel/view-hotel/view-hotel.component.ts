import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { RoomService } from 'src/app/services/room.service';
import { RoomModel } from '../../room/view-room/room-model';
import { HotelModel } from '../hotel-model';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.css']
})
export class ViewHotelComponent implements OnInit {
  hotels:HotelModel[] =  [];
  rooms: RoomModel[] = [];
  sorts:string[] = ['By Id','Price','Name'];
  filters:string[] = ['Bengaluru','Mumbai','Pune','Hyderabad','Chennai'];
  hotel = new HotelModel(0,'','','','',0,'','','','');
  constructor(private hotelService:HotelService,
              private roomService: RoomService,
              private router: Router
               ) {
    this.hotelService.getAllHotels().subscribe(
      data => {
        this.hotels = data;
        console.log(this.hotels);        
      },
      error=>{

      }
    );

   }

  ngOnInit(): void {
  }
  
  // Get Rooms By Hotel
  getRoomsBy(hotel: HotelModel){
    this.roomService.getRoomsByHotel(hotel.hotelId).subscribe(
      data => {
      this.rooms = [];
      this.rooms = data;
  
      console.log(this.rooms);
      this.hotelService.setHotel(hotel)
      this.router.navigate(['adminDash/viewroom']);
    },
    error=>{

    }
  );
  }
  editHotel(hotel:HotelModel){
      console.log(hotel);
      this.hotelService.setHotel(hotel);
      console.log(this.hotelService.getHotel());
      this.router.navigate(['adminDash/hotelUpdate']);
  }

  // Sort Hotels
  sortHotels(sort:string){
    if(sort=='Price'){
    this.hotelService.sortHotelsByPriceAs().subscribe(
      data => {
        this.hotels = data;
        console.log(this.hotels);
      },
      error=>{

      }
    );}
    else if(sort=='Name'){
      this.hotelService.sortHotelsByName().subscribe(
        data => {
          this.hotels = data;
        console.log(this.hotels);
        },
        error=>{
  
        }
      );
    }else {
      this.hotelService.getAllHotels().subscribe(
        data => {
          this.hotels = data;
          console.log(this.hotels);
        },
        error=>{
  
        }
      );
    }

 }
 // Filter
 filterHotels(filt:string){
 if(filt=='Bengaluru'){
    this.hotelService.filterHotelsByName(filt).subscribe(
      data => {
        
        this.hotels = data;
        console.log(this.hotels);
      },
      error=>{

      }
    );}
    else if(filt=='Mumbai'){
      this.hotelService.filterHotelsByName(filt).subscribe(
        data => {
          
          this.hotels = data;
          console.log(this.hotels);
        },
        error=>{
  
        }
      );}
      else if(filt=='Pune'){
        this.hotelService.filterHotelsByName(filt).subscribe(
          data => {

            this.hotels = data;
            console.log(this.hotels);
          },
          error=>{
    
          }
        );}else if(filt=='Chennai'){
          this.hotelService.filterHotelsByName(filt).subscribe(
            data => {
              this.hotels = data;
              console.log(this.hotels);
            },
            error=>{
      
            }
          );}else if(filt=='Hyderabad'){
            this.hotelService.filterHotelsByName(filt).subscribe(
              data => {
                this.hotels = data;
                console.log(this.hotels);
              },
              error=>{
        
              }
            );}
}

}