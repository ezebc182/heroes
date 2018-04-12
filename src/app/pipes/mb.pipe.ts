import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mb'
})
export class MbPipe implements PipeTransform {

  transform(value: number): string {
    return (value) ?  (value / 1024 / 1024).toFixed(2) + ' Mb' : '';
  }

}
