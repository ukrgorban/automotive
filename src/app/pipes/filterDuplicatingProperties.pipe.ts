import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterDuplicatingProperties'})
export class FilterDuplicatingProperties implements PipeTransform {
  transform(cars){
      let str = "";
      let arrRes = [{make: "Все марки"}];
      
      for(let i = 0; i < cars.length; i++){
          if(str.indexOf(cars[i].make) === -1){
              arrRes.push(cars[i]);
              str += cars[i].make;
          }
      }
      
      return arrRes;
  }
}