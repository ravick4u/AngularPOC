import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {DialoginputComponent} from '../dialoginput/dialoginput.component'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog = () => {
    const dialogRef = this.dialog.open(DialoginputComponent, {data: {name: 'Ravi Khambhati'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Result: ${result}`);
    });
  }

}
