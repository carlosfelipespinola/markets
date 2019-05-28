import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating-input',
  templateUrl: './star-rating-input.component.html',
  styleUrls: ['./star-rating-input.component.scss']
})
export class StarRatingInputComponent implements OnInit {

  @Input()
  public rating: number;

  @Input()
  public readonly: boolean;

  constructor() { }

  ngOnInit() {
  }

}
