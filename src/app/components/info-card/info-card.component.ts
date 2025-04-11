import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css',
    './info-card.responsive.component.css'
  ],
})
export class InfoCardComponent implements OnInit {
  constructor() {}

  episodes = [
    {
      title: "You Aren't E-Rank, Are You?",
      image:
        '../../assets/images/episode01.jpg',
    },
    {
      title: "I Suppose You Aren't Aware",
      image:
        '../../assets/images/episode02.jpg',
    },
    {
      title: 'Still a Long Way to Go',
      image:
        '../../assets/images/episode03.jpg',
    },
    {
      title: 'I Need to Stop Faking',
      image:
        '../../assets/images/episode04.jpg',
    },
    {
      title: "This Is What We're Trained to Do",
      image:
        '../../assets/images/episode05.jpg',
    },
    {
      title: 'Don’t Look Down on My Guys',
      image:
        '../../assets/images/episode06.jpg',
    },
  ];

  ngOnInit(): void {}
}
