import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, matDialogAnimations} from '@angular/material/dialog';

@Component({
  selector: 'app-dialoginput',
  templateUrl: './dialoginput.component.html',
  styleUrls: ['./dialoginput.component.css']
})
export class DialoginputComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
