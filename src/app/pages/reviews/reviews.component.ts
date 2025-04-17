import { Component, OnInit } from '@angular/core';
import { animeInfo } from '../../data/animeInfo'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css', './reviews.responsive.component.css'],
})
export class ReviewsComponent implements OnInit {
  englishTitle:string  = animeInfo.englishTitle;
  coverImg:string = animeInfo.coverImg;
  reviews = animeInfo.reviews;
  gifUrl:string = "https://comicvine.gamespot.com/a/uploads/scale_medium/11133/111337706/6269430-4865961223-latest";
  
  constructor() {}

  ngOnInit(): void {
    console.log(this.coverImg)
  }
}
