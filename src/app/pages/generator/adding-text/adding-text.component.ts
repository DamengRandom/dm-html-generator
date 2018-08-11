import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContentsPreviewComponent } from '../contents-preview/contents-preview.component';

@Component({
  selector: 'app-adding-text',
  templateUrl: './adding-text.component.html',
  styleUrls: ['./adding-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AddingTextComponent implements OnInit {
  htmlContent;
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}

  addText() {
    const divNode = document.createElement('div');
    const lengthId = document.getElementById('paper').childNodes.length;
    divNode.classList.add('text-div-node');
    divNode.setAttribute('id', `divNode${lengthId}`);
    divNode.setAttribute('contenteditable', 'true');
    divNode.setAttribute('placeholder', 'Start typing ..');
    setTimeout(() => {
      document.getElementById(`divNode${lengthId}`).focus();
    }, 0);
    document.getElementById('paper').appendChild(divNode);
  }

  clearText() {
    const nodeTexter = document.getElementById('paper');
    while (nodeTexter.hasChildNodes()) {
      nodeTexter.removeChild(nodeTexter.lastChild);
    }
    document.getElementById('paper').setAttribute('contenteditable', 'false');
  }

  openPreview() {
    this.htmlContent = document.getElementById('paper').innerHTML;
    const dialogRef = this.dialog.open(ContentsPreviewComponent, {
      width: '100vh',
      height: '100vh',
      data: { htmlContent: this.htmlContent }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.htmlContent = result;
    });
  }
}
