import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyInd',
  standalone: true
})
export class CurrencyIndianPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '';
    return '₹' + value.toFixed(0);
  }
}
