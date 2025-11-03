import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe',
})
export class PricePipe implements PipeTransform {
  transform(value: number, currency: string = '$'): string {
    return `${currency}${value.toFixed(2)}`;
  }
}
