import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
  name: 'times'
})
export class TimesPipe implements PipeTransform {
  transform(value) {
    return (new Array(value)).fill(1);
  }
}