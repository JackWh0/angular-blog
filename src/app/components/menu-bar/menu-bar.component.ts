import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: [
    './menu-bar.component.css',
    './menu-bar.responsive.component.css',
  ],
})
export class MenuBarComponent implements OnInit {
  @Input()
  coverImg: string = '';

  constructor() {}

  ngOnInit(): void {}
}
