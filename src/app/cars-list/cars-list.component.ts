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
    data: string;
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
    
    search(data){
        this.data = data;
        
        if(this.data){
            this.carService // обращаемся к сервису
                .getAll()
                .subscribe((result) => {
                    let res = this.carService.searchData(result, this.data, "name");
                    if(res){
                        this.cars =res;
                    }else{
                        alert("Таких авто нету");
                    }
            });
            this.data = null;
        }else{
            alert("Введите данные");
        }
    }
    
    resetSearch(){
        this.carService // обращаемся к сервису
            .getAll()
            .subscribe((result) => {
            this.cars = result;
        });
    }
    
    searchKeyUp(data){
        this.data = data;
        this.carService // обращаемся к сервису
            .getAll()
            .subscribe((result) => {
                let res = this.carService.searchData(result, this.data, "name");
                if(res){
                    this.cars = res;
                }else{
                    this.cars = null;
                }
            });   
    }
    
    onSelect(selected: Car) {
        // При клике по элементу списка перенаправляем пользователя по адресу /car/id
        this.router.navigate(["car", selected.id]);
    }
}