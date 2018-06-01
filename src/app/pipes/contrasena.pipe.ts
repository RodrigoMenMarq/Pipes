import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, visible: true): any {
    let dato="";
    if(!visible){
       dato = value;
    }else{
      for (let i =0 ; i<value.length;i++){
        dato=dato+"*";
      }
    }
    return dato;
  }

}
