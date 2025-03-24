import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.css']
})
export class EpisodeCardComponent implements OnInit {


  @Input() title = "";
  @Input() imageUrl = "";
  @Input() episodeNumber = "";

  ngOnInit(): void {
  }
  constructor(private sanitizer: DomSanitizer) {}
  public getSantizeUrl(url : string) {
      return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
