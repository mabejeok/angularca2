import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../providers/auth.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  //takes in two things 1) authentication
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  //calling on auth.service.ts's loginwithgoogle
  loginGoogle() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    });
  }

  //calling on auth.service.ts's loginwithgoogle
  loginFaceBook() {
    this.authService.loginWithFacebook().then((data) => {
      this.router.navigate(['']);
    });
  }
}
