import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exec-cmds',
  templateUrl: './exec-cmds.component.html',
  styleUrls: ['./exec-cmds.component.scss']
})
export class ExecCmdsComponent implements OnInit {
  commonCommands = ['bold', 'italic', 'strikeThrough', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'insertOrderedList'];

  constructor() {}

  ngOnInit() {}

  // common exec command functions

  commonExecCommands(cmd) {
    document.execCommand(cmd);
  }

  // customised exec command functions
  addImage() {
    const imageUrl = prompt('Please enter your image URL: (Please start with http:// or https:// )');
    if (imageUrl.match(/\.(jpeg|jpg|gif|png)$/) != null) {
      // document.execCommand('insertImage', false, imageUrl);
      document.execCommand('insertHTML', false, `<img src=${imageUrl} alt="image" />`);
    } else {
      alert('Invlaid URL ..');
    }
  }

  addLink() {
    const linkUrl = prompt('Please enter the link URL: (Please start with http:// or https:// )');
    const linkText = document.getSelection().toString();
    document.execCommand('insertHTML', false, `<a href=${linkUrl} target="_blank">${linkText}</a>`);
  }

  addHeading() {
    const fontSize = prompt('Please enter heading size, (1 -> 5 is the valid range, eg: 1)');
    const headingText = document.getSelection().toString();
    document.execCommand('insertHTML', false, `<h${fontSize}>${headingText}</h${fontSize}>`);
  }

  addHighLight() {
    const colorCode = prompt('Please enter highlight color code, eg: #FF0000');
    const headingText = document.getSelection().toString();
    document.execCommand('insertHTML', false,
      `<span style="background-color: ${colorCode}; opacity: 0.4; color: #fff;">${headingText}</span>`);
  }

  addCodePiece() {
    const codeChunk = document.getSelection().toString();
    document.execCommand('insertHTML', false,
      `<blockquote style="background-color: #ddd; padding: 24px; margin: 24px;"><pre><code>${codeChunk}</code></pre></blockquote>`);
  }
}
