import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Car } from "../shared/car";
import { CarService } from "../shared/car.service";

@Component({
    moduleId: module.id,
    selector: 'cars-list',
    templateUrl: 'cars-list.component.html',
})
export class CarsListComponent implements OnInit{
    cars: Car[];
    items: FirebaseListObservable<any[]>;
    
    constructor(private router: Router, private carService: CarService, private db: AngularFireDatabase){
        
    }
    
    ngOnInit(){
        this.carService // обращаемся к сервису
            .getAll()   // получаем Promise 
            .then(result => this.cars = result); // как только Promise перейдет в состояние resolved результат его работы присваиваем свойству cars
        this.items = this.db.list('/cars');
    }
    
    onSelect(selected: Car) {
        // При клике по элементу списка перенаправляем пользователя по адресу /car/id
        this.router.navigate(["car", selected.id]);
    }
}