import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnChanges{

  @Input() public rating =2;
  public starWidth !:number;
  

  ngOnChanges(){

    this.starWidth = this.rating*125/5;
    console.log(this.starWidth)
  }


}
