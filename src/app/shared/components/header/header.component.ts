import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Html Generator';
  routes = [
    { url: '/generator', text: 'Generator'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
