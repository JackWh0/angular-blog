import { Component } from '@angular/core';
import { animeInfo } from './data/animeInfo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';
  coverImg:string = animeInfo.coverImg;
}
