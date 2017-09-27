import { Injectable } from "@angular/core";

import { Car } from "./car";

let cars = [
    new Car(1, "Skoda"),
    new Car(2, "Mazda"),
    new Car(3, "Lada")
];

// Promise, который сразу переходит в состояние resolved с данными из массива cars
let carsPromise = Promise.resolve(cars);

// Сервис для работы с данными.
@Injectable()
export class CarService {

    // Метод для получения всех cars. Возвращает Promise с массивом Car
    getAll(): Promise<Car[]> {
        return carsPromise;
    }

    // Метод для получения car по id. Возвращает Promise c экземпляром Car
    getCar(id: number): Promise<Car> {
        return carsPromise
            .then(cars => cars.find(x => x.id == id));
    }
}