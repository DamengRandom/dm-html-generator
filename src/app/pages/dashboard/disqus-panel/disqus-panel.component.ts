import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disqus-panel',
  templateUrl: './disqus-panel.component.html',
  styleUrls: ['./disqus-panel.component.scss']
})
export class DisqusPanelComponent implements OnInit {
  pagePath = '/dmhg/discuss';
  constructor() { }

  ngOnInit() {
  }

}
