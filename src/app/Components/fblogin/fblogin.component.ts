import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fblogin',
  templateUrl: './fblogin.component.html',
  styleUrls: ['./fblogin.component.css'],
})
export class FbloginComponent implements OnInit {
  constructor(private fb: FacebookService, private router: Router) {
    const initParams: InitParams = {
      appId: '299170891982550',
      xfbml: true,
      version: 'v12.0',
    };

    fb.init(initParams);
  }
  loginWithFacebook(): void {
    this.fb
      .login()
      .then((response: LoginResponse) => {
        console.log(response);
        this.router.navigate(['page']);
      })
      .catch((error: any) => console.error(error));
  }

  ngOnInit(): void {}
}
