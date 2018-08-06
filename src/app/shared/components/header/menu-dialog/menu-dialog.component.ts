import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent implements OnInit {
  public routeObs$: Observable<any[]>;
  private obsData;

  constructor(public dialogRef: MatDialogRef<MenuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.routeObs$ = of(data);
  }

  ngOnInit() {
    this.obsData = this.routeObs$.subscribe();
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnDestory() {
    this.obsData.unsubscribe();
  }
}
