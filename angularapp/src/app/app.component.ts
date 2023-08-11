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

  forexRates: { id: string, value: number }[] = [
    { "id": "USD", "value": 1.126735 },
    { "id": "GBP", "value": 0.876893 },
    { "id": "INR", "value": 79.677056 }
  ];
}