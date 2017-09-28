import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { CarService } from "../shared/car.service";

@Component({
    moduleId: module.id,
    selector: 'car-details',
    templateUrl: 'car-details.component.html',
})
export class CarDetailsComponent implements OnInit{
    car: {};
    
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: CarService){}
    
    ngOnInit(){
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; // конвертируем значение параметра id в тип number
            this.service.getCar(id).subscribe(
                result =>  this.car = this.service.arrToObject(result)
            );
        })
        
    }
    goToCarsList(){
        this.router.navigate(["cars"]);
    }
}