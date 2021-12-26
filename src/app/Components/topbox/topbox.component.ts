import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbox',
  templateUrl: './topbox.component.html',
  styleUrls: ['./topbox.component.css'],
})
export class TopboxComponent implements OnInit {
  constructor() {}
  @Input() headingdata: string = '';
  @Input() linktext: string = '';
  ngOnInit(): void {}
}
