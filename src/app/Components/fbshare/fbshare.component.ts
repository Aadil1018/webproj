import { Component, OnInit } from '@angular/core';
import {
  FacebookService,
  UIParams,
  UIResponse,
  InitParams,
} from 'ngx-facebook';
@Component({
  selector: 'app-fbshare',
  templateUrl: './fbshare.component.html',
  styleUrls: ['./fbshare.component.css'],
})
export class FbshareComponent implements OnInit {
  constructor(private fb: FacebookService) {}
  share(url: string) {
    const params: UIParams = {
      href: 'https://google.com',
      method: 'share',
    };
    this.fb
      .ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }
  ngOnInit(): void {
    const initParams: InitParams = {
      appId: '299170891982550',
      xfbml: true,
      version: 'v12.0',
    };

    this.fb.init(initParams);
  }
}
