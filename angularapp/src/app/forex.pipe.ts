import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forexRates'
})
export class ConversionPipe implements PipeTransform {
  forexRates: { id: string, value: number }[] = [
    { "id": "USD", "value": 1.126735 },
    { "id": "GBP", "value": 0.876893 },
    { "id": "INR", "value": 79.677056 }
  ];

  transform(amount: number, fromCurrency: string, toCurrency: string): number {
    const fromRate = this.forexRates.find(rate => rate.id === fromCurrency)?.value || 1;
    const toRate = this.forexRates.find(rate => rate.id === toCurrency)?.value || 1;

    return (amount / fromRate) * toRate;
  }
}
