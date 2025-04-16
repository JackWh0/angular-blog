import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css',
    './info-card.responsive.component.css'
  ],
})
export class InfoCardComponent implements OnInit {
  @Input()
  englishTitle: string = "";
  @Input()
  japaneseTitle: string = "";
  @Input()
  animeYear: string = "";
  @Input()
  episodeDuration:string = "";
  @Input()
  animeSynopsis: string = "";

  constructor() {}

  

  ngOnInit(): void {}
}
