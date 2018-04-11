import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appearence'
})
export class AppearencePipe implements PipeTransform {

  transform(value: any): any {
    return (value) ? value : 'Not specified yet';
  }

}
