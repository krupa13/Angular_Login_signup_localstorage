import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  loginUser: any;

  constructor(private router: Router) {
    const localUser = localStorage.getItem('loginUserData');
    if(localUser != null) {
      this.loginUser = JSON.parse(localUser);
    }
  }

  logoutUser() {
    localStorage.removeItem('loginUserData');
    this.router.navigateByUrl('/login');
  }

}
