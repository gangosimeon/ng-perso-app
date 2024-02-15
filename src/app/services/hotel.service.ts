import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  
  constructor(
    private _http :HttpClient,
  ) { }

  private url ='http://localhost:3000/hotels';

  public getHotels():Observable<Hotel[]>{
    return this._http.get<Hotel[]>(this.url)
  }
}
