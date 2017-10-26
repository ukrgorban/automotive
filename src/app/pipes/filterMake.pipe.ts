import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterMake'
})
export class FilterMakePipe implements PipeTransform{
    transform(cars, make){
        if(make === "Все марки"){
            return cars;
        }
        
        if(make){
            return cars.filter(car =>{
                return car.make.includes(make);
            })
        }else{
            return cars;
        }
    }
}