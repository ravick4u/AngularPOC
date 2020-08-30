import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apptabs',
  templateUrl: './apptabs.component.html',
  styleUrls: ['./apptabs.component.css']
})
export class ApptabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tabSelectedIndexChange(selectedIndex): void{
    console.log(selectedIndex);
  }

}
