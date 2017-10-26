import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortYear'
})
export class SortYearPipe implements PipeTransform{
    transform(cars, flag){
        if(!flag){
            cars.sort((carA, carB) => {
                return carA["id"] - carB["id"];
            });
            return cars;
        }else{
            cars.sort((carA, carB) => {
                return carB["year"] - carA["year"];
            });
            return cars;
        }
    }
}