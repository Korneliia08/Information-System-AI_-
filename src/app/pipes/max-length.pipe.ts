import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength' ,
  standalone: false,
})
export class MaxLengthPipe implements PipeTransform {
  transform(value: string, length: number, chars: string = '...'): string {
    if (!value || typeof value !== 'string') return value;
    if (value.length <= length) {
      return value;
    }
    return value.substring(0, length) + chars;
  }
}
