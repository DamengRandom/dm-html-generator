import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-adding-text',
  templateUrl: './adding-text.component.html',
  styleUrls: ['./adding-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AddingTextComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  addText() {
    const textDivNode = document.createElement('div');
    textDivNode.classList.add('text-div-node');
    document.getElementById('texter').setAttribute('contenteditable', 'true');
    document.getElementById('texter').appendChild(textDivNode);
  }

  clearText() {
    document.getElementById('texter').remove();
    document.getElementById('texter').setAttribute('contenteditable', 'false');
  }
}
