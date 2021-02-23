import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'erro'
})
export class ErroPipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      if (value['required']) {
        return 'Campo obrigatório.'; 
      } else if (value['email']) {
        return 'E-mail inválido';
      } else {
        
      }
    }
    return null;
  }

}
