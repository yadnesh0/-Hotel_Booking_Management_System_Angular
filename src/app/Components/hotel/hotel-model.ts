export class HotelModel{
        hotelId:number;
        city:string;
        hotelName:string;
        address:string;
        description:string;
        avgRatePerDay:number;
        email:string;
        phone1:string;
        phone2:string;
        website:string;
    constructor(
        hotelId:number,
        city:string,
        hotelName:string,
        address:string,
        description:string,
        avgRatePerDay:number,
        email:string,
        phone1:string,
        phone2:string,
        website:string
    ){ 
         this.hotelId = hotelId;
         this.city = city;
         this.hotelName = hotelName;
         this.address = address;
         this.description = description;
         this.avgRatePerDay = avgRatePerDay;
         this.email = email;
         this.phone1 = phone1;
         this.phone2 = phone2;
         this.website = website;
    }
}  