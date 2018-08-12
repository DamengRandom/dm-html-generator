import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contents-preview',
  templateUrl: './contents-preview.component.html',
  styleUrls: ['./contents-preview.component.scss']
})
export class ContentsPreviewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ContentsPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log('content: ', this.data.htmlContent);
  }

  close() {
    const deleteIcons = document.getElementsByClassName('delete-icon');
    for (let i = 0; i < deleteIcons.length; i++) {
      deleteIcons[i].classList.remove('hide');
    }
    this.dialogRef.close();
  }
}
