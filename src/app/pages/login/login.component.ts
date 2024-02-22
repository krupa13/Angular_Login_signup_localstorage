import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  isSignDivVisible: boolean = true;

  signUpObj: SignUpModel = new SignUpModel();
  loginObj: LoginModel = new LoginModel();

  constructor(private router: Router) {};

  onRegisterData(signUpForm: NgForm) {
    const localUser = localStorage.getItem('angularLoginUsers');
    if(localUser != null) {
      const userData = JSON.parse(localUser);
      userData.push(this.signUpObj);
      localStorage.setItem('angularLoginUsers', JSON.stringify(userData));
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angularLoginUsers', JSON.stringify(users));
    }
    alert('Registration Successfull');
    signUpForm.reset();
  }

  onLogin(loginForm: NgForm) {
    debugger;
    const localUser = localStorage.getItem('angularLoginUsers');
    if(localUser != null) {
      const userData = JSON.parse(localUser);

      const isUserPresent = userData.find((user: SignUpModel) => user.email === this.loginObj.email && user.password === this.loginObj.password);
      if(isUserPresent != undefined) {
        alert('User Found!');
        localStorage.setItem('loginUserData', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('User not Found.');
        loginForm.reset();
      }
    }
  }

}

export class SignUpModel {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}

export class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
