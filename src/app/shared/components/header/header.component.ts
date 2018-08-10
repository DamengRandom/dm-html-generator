import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

// components
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Html Generator';
  routes = [
    { url: '/about', text: 'About Me' },
    { url: '/generator', text: 'Generator' }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  openMenu() {
    this.dialog.open(MenuDialogComponent, {
      data: this.routes,
      panelClass: 'full-width-dialog',
      hasBackdrop: true
    });
  }
}
