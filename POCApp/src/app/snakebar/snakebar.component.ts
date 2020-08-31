import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-snakebar',
  templateUrl: './snakebar.component.html',
  styleUrls: ['./snakebar.component.css']
})
export class SnakebarComponent implements OnInit {

  constructor(private snakebar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnakebar = (message, action) => {
    const snackBarRef = this.snakebar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe( () => {
      console.log('The taskbar was dismiss');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('Snackbar dismiss');
    });
  }
  openCustomSnakebar = () => {
    this.snakebar.openFromComponent(CustomSnackBarComponent, {duration: 2000});
  }
}

@Component({
  selector: 'app-snakebarchild',
  template: `<span style='color: orange'>Custom Snakebar</span>`
})
export class CustomSnackBarComponent{

}
