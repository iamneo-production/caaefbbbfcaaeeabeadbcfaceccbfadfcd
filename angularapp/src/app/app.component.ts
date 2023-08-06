import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fromCurrency: string = 'USD'; // Explicitly define type as string
  toCurrency: string = 'USD'; // Explicitly define type as string
  amount: number = 0; // Explicitly define type as number

  convertForex() {
    // This function is not needed as the conversion is handled by the pipe directly in the template.
  }
}
