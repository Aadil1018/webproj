import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  constructor() {}
  @Input() c_data: { img: string; title: string; courses: string[] } = {
    img: '',
    title: '',
    courses: [],
  };
  data1: string[] = [];
  data2: string[] = [];

  ngOnInit(): void {
    for (let i = 0; i < this.c_data.courses.length; i++) {
      if (i < (this.c_data.courses.length / 2)) {
        this.data1.push(this.c_data.courses[i]);
      } else {
        this.data2.push(this.c_data.courses[i]);
      }
    }
  }
}
