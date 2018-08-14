import { Router } from '@angular/router';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';

// components
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';

// services
import { BackButtonService } from '../../../services/back-button.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnChanges {
  title = 'Html Generator';
  routes = [
    { url: '/about', text: 'About Me' },
    { url: '/generator', text: 'Generator' }
  ];

  constructor(public backButtonService: BackButtonService,
    public dialog: MatDialog,
    public router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes? ', changes.router.currentValue);
  }

  backButtonDisplay() {
    return this.backButtonService.showOrNot(this.router.url);
  }

  openMenu() {
    this.dialog.open(MenuDialogComponent, {
      data: this.routes,
      panelClass: 'full-width-dialog',
      hasBackdrop: true
    });
  }
}
