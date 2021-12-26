import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/Course';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  constructor() {}
  @Input() summarydata: {img:string, title:string, courses:string[]}[] = [];
  ngOnInit(): void {}
}
