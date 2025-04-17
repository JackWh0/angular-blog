import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster-card',
  templateUrl: './poster-card.component.html',
  styleUrls: [
    './poster-card.component.css',
    './poster-card.responsive.component.css',
  ],
})
export class PosterCardComponent implements OnInit {
  @Input()
  posterImgUrl: string = '';
  @Input()
  number_of_reviews: string = '';
  @Input()
  year: string = '';
  @Input()
  number_of_episodes: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
