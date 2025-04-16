import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css', './review.responsive.component.css'],
})
export class ReviewComponent implements OnInit {
  @Input()
  imgUrl: string = '';
  @Input()
  username: string = '';
  @Input()
  score: string = '';
  @Input()
  comment: string = '';

  constructor() {}

  ngOnInit(): void {}
}
