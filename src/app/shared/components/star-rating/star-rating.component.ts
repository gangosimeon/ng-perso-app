import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnChanges{

  @Input() public rating= 2;
  
  public starWidth !:number;
  @Output()
  public receiveRatingClicked: EventEmitter<string>=new EventEmitter<string>

  ngOnChanges(){

    this.starWidth = this.rating*125/5;
    console.log(this.starWidth)
  }
 public sendRating(){
  this.receiveRatingClicked.emit(`La note est de ${this.rating}`)
 }

}
