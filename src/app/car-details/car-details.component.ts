import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Car } from "../shared/car";
import { CarService } from "../shared/car.service";

@Component({
    moduleId: module.id,
    selector: 'car-details',
    templateUrl: 'car-details.component.html',
})
export class CarDetailsComponent implements OnInit{
    car: Car;
    
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: CarService){}
    
    ngOnInit(){
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; // конвертируем значение параметра id в тип number
            this.service
                .getCar(id)  // обращаемся к сервису и запрашиваем фразу по id. Получаем Promise
                .then(result =>{
                
                this.car = result;
            } );  // как только Promise перейдет в состояние resolved присваиваем его значение свойству car
        });
    }
    goToCarsList(){
        this.router.navigate(["cars"]);
    }
}