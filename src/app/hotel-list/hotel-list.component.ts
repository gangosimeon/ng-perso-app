import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { HotelService } from '../services/hotel.service';
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit{
  title="Listes des hotels "

  constructor(
    private _hotelService: HotelService
  ){}
  public hotels:Hotel[]=[];

  public filteredHotels:Hotel[]=[];

  public bool !:boolean;
  public motRech ="motR";
  private _filterHotel="mot"


    
  ngOnInit(): void {
   this.getHotelsList();
  //  this.filteredHotels=this.hotels;
   this.filterHotel=""
  }

  getHotelsList(){
    this._hotelService.getHotels().subscribe({
     next: (hotels) => {
      this.hotels = hotels;
      this.filteredHotels=this.hotels;
      console.log(hotels)
     } 
    });
    
    
  }
   /**
     * get
     */
   public get hotelFilter():string {
    return this._filterHotel;
  }
  

  /**
   * set
   */
  public set filterHotel(hotel:string) {
    this._filterHotel= hotel;
    this.filteredHotels=this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }

  private filterHotels(hotelRech:string): Hotel[] {
    hotelRech = hotelRech.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel:Hotel)=> hotel.nom.toLocaleLowerCase().indexOf(hotelRech)!=-1
    );
    return res;
  }

  public AfficherCacher():void{
    this.bool = !this.bool;
    console.log(this.bool)
  }

  
  public receivedRating !:string;

  public receiveRatingClicked(message:string){
    this.receivedRating=message;
  }
}
