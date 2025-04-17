import { Component, OnInit } from '@angular/core';
import { animeInfo } from '../../data/animeInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css'],
})
export class HomeComponent implements OnInit {
  englishTitle: string = animeInfo.englishTitle;
  japaneseTitle: string = animeInfo.japaneseTitle;
  animeYear: string = animeInfo.animeYear;
  episodeDuration: string = animeInfo.episodeDuration;
  animeSynopsis: string = animeInfo.animeSynopsis;
  posterImg: string = animeInfo.posterImgUrl;
  trailerImg: string = animeInfo.trailer.image_url;
  trailerUrl: string = animeInfo.trailer.embed_url;
  episodes = animeInfo.episodesData;
  number_of_episodes:number = animeInfo.episodesData.length;
  number_of_reviews: string = animeInfo.number_of_reviews;
  genres:string[] = animeInfo.genres;
  coverImg:string = animeInfo.coverImg;

  constructor() {}

  ngOnInit(): void {}
}
