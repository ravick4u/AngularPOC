import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.css']
})
export class ScrollingComponent implements OnInit {

  numbers = [];

  constructor() {
    for (let i = 0; i < 100; i++){
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {
  }

}
