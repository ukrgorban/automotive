import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform{
    transform(cars, data){
        data = data.toUpperCase();
        return cars.filter(car =>{
            car.name = car.name.toUpperCase();
            return car.name.includes(data);
        })
    }
}