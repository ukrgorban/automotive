import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CarService } from "../shared/car.service";
import { Car } from "../shared/car"

@Component({
    moduleId: module.id,
    selector: 'cars-list',
    templateUrl: 'cars-list.component.html',
})
export class CarsListComponent implements OnInit{
    cars: Array<{}>;
    
    constructor(private router: Router, private carService: CarService){
        
    }
    
    ngOnInit(){
        this.carService // обращаемся к сервису
            .getAll()   // получаем Promise 
            .subscribe(result => this.cars = result); 
    }
    
    onSelect(selected: Car) {
        // При клике по элементу списка перенаправляем пользователя по адресу /car/id
        this.router.navigate(["car", selected.id]);
    }
}