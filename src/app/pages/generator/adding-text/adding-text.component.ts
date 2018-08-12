import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContentsPreviewComponent } from '../contents-preview/contents-preview.component';

@Component({
  selector: 'app-adding-text',
  templateUrl: './adding-text.component.html',
  styleUrls: ['./adding-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AddingTextComponent {
  htmlContent;
  disableButton: Boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnChange() {
    if (document.getElementById('paper').childNodes.length >= 1) {
      this.disableButton = true;
    }
  }

  addNode() {
    const divNode = document.createElement('div');
    const deleteIcon = document.createElement('i');
    const lengthId = document.getElementById('paper').childNodes.length;

    // set div node attributes
    divNode.classList.add('text-div-node');
    divNode.setAttribute('id', `divNode${lengthId}`);
    divNode.setAttribute('contenteditable', 'true');
    divNode.setAttribute('placeholder', 'Start typing (click ADD button to add new lines) ..');

    // set autofocus
    setTimeout(() => {
      document.getElementById(`divNode${lengthId}`).focus();
    }, 0);

    // add delete button for each node
    const iconClassList = ['fas', 'fa-trash', 'delete-icon'];
    deleteIcon.classList.add(...iconClassList);
    deleteIcon.setAttribute('id', `icon${lengthId}`);
    deleteIcon.addEventListener('click', () => {
      document.getElementById(`divNode${lengthId}`).remove();
      document.getElementById(`icon${lengthId}`).remove();
    });
    document.getElementById('paper').appendChild(deleteIcon);

    // add content to the the central div (paper)
    document.getElementById('paper').appendChild(divNode);
    this.disableButton = true;
  }

  clearNode() {
    const nodeDOM = document.getElementById('paper');
    while (nodeDOM.hasChildNodes()) {
      nodeDOM.removeChild(nodeDOM.lastChild);
    }
    document.getElementById('paper').setAttribute('contenteditable', 'false');
    this.disableButton = false;
  }

  openPreview() {
    this.deleteIconsToggle(true);
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

  deleteIconsToggle(toggle) {
    const deleteIcons = document.getElementsByClassName('delete-icon');
    for (let i = 0; i < deleteIcons.length; i++) {
      if (toggle === true) {
        deleteIcons[i].className += ' hide';
      }
      if (toggle === false) {
        deleteIcons[i].className.replace(' hide', '');
      }
    }
  }
}
