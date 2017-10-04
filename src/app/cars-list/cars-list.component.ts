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
    data: string = "";
    init: boolean = false;
    
    constructor(private router: Router, private carService: CarService){
        
    }
    
    ngOnInit(){
        this.carService // обращаемся к сервису
            .getAll()
            .subscribe((result) => {
            this.cars = result;
            this.init = true;
        });
    }
        
    onSelect(selected: Car) {
        // При клике по элементу списка перенаправляем пользователя по адресу /car/id
        this.router.navigate(["car", selected.id]);
    }
}