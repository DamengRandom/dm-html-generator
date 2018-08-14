import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BackButtonService {

  constructor(private router: Router) { }

  showOrNot(currentPath) {
    return (currentPath === '' || currentPath === '/') ? true : false;
  }
}
