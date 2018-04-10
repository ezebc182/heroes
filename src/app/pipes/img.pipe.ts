import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(value: any): any {
    return (value) ? `/assets/img/${value}` : '/assets/img/noimage.png';
  }

}
