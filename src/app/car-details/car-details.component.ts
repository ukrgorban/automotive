import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { CarService } from "../shared/car.service";

@Component({
    moduleId: module.id,
    selector: 'car-details',
    templateUrl: 'car-details.component.html',
})
export class CarDetailsComponent implements OnInit{
    car;
    bigImg: string;
    
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: CarService){}
    
    ngOnInit(){
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; // конвертируем значение параметра id в тип number 
            
            this.service.getAll().subscribe(result => {//получаем все авто
                let arrIndex = this.service.findIndex(result, id);//поиск нужного объекта по id
                this.car = result[arrIndex];
                this.bigImg = this.car.img[0];//основная картинка
            });
        });
        

    }
    goToCarsList(){
        this.router.navigate(["cars"]);
    }
    
    changeImage(e){
        let src = e.target.src;
        let srcPos = src.lastIndexOf("/");
        this.bigImg = src.substring(srcPos + 1);
    }
}