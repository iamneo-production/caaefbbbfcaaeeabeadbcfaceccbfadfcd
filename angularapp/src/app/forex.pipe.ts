import { Pipe, PipeTransform } from '@angular/core';

const forexRates = {
  "USD": 1.126735,
  "GBP": 0.876893,
  "INR": 79.677056
};

@Pipe({
  name: 'forex'
})
export class ForexPipe implements PipeTransform {
  transform(amount: number, fromCurrency: string, toCurrency: string): number {
    const fromRate = forexRates[fromCurrency] || 1;
    const toRate = forexRates[toCurrency] || 1;

    return (amount / fromRate) * toRate;
  }
}