import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortPrice'
})
export class SortPricePipe implements PipeTransform{
    transform(cars, flag){
        if(!flag){
            cars.sort((carA, carB) => {
                return carA["id"] - carB["id"];
            });
            return cars;
        }else{
            cars.sort((carA, carB) => {
                return carA["price"] - carB["price"];
            });
            return cars;
        }
    }
}