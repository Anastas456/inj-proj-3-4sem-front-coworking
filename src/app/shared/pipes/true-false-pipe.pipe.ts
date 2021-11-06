import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trueFalsePipe'
})
export class TrueFalsePipePipe implements PipeTransform {

  transform(value: boolean): string {
    if (value === true){
      return 'Да'
    }
    else {
      return 'Нет'
    }
  }

}
