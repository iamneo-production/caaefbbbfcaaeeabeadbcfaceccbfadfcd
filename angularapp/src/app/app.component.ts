import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fromCurrency: string = 'USD';
  toCurrency: string = 'USD';
  amount: number = 0;

  convertForex() {
    // This function is not needed as the conversion is handled by the pipe directly in the template.
  }
}
