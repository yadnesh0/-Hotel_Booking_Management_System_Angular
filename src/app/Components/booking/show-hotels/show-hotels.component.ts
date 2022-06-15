import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { HotelModel } from '../../hotel/hotel-model';
import { RoomModel } from '../../room/view-room/room-model';

@Component({
  selector: 'app-show-hotels',
  templateUrl: './show-hotels.component.html',
  styleUrls: ['./show-hotels.component.css']
})
export class ShowHotelsComponent implements OnInit {
  hotels:HotelModel[] =  [];
  rooms: RoomModel[] = [];
  sorts:string[] = ['By Id','Price','Name'];
  filters:string[] = ['Bengaluru','Mumbai','Pune','Hyderabad','Chennai'];
  hotel = new HotelModel(0,'','','','',0,'','','','');
  constructor(private hotelService:HotelService,
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
    this.hotelService.getRoomsByHotelId(hotel.hotelId).subscribe(
      data => {
      this.rooms = [];
      this.rooms = data;
  
      console.log(this.rooms);
      this.hotelService.setHotel(hotel)
      this.router.navigate(['rooms']);
    },
    error=>{

    }
  );
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
