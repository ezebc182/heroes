import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firebaseKeys',
  pure: false
})
export class FirebaseKeysPipe implements PipeTransform {

  transform(value: any): any {
    const keys = [];

    for (const key in value) {
      if (key) {
        keys.push(key);
      }
    }

    return keys;
  }

}
