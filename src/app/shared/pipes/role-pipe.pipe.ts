import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rolePipe'
})
export class RolePipePipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'admin'){
      return 'Администратор'
    }
    if (value === 'worker'){
      return 'Работник'
    }
    if (value === 'client'){
      return 'Клиент'
    }
  }

}
