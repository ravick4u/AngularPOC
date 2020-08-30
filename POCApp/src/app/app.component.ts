import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POCApp';
  notificationCount = 0;

  showSpinner = false;

  showData(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }
}
