import { Component, OnInit } from '@angular/core';
import * as data from '../../data/classinfo.json';
import * as top from '../../data/boxdata.json';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnInit {
  constructor() {}
  public topdata: { linktext: string; headingdata: string } = top;
  public appdata: {classes:{img:string, title:string, courses:string[]}[]} = data;
  ngOnInit(): void {
    console.log(data);
  }
}
