import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CarService {
    
    constructor(private db: AngularFireDatabase){}
    
    // Метод для получения всех cars. Возвращает Observable с массивом
    getAll(): FirebaseListObservable<any[]> {
        return this.db.list('/cars');
    }
    
    // Метод для получения car по id. Возвращает Observable с массивом
    getCar(id: number){
        id = id - 1;
        return this.db.list('/cars/'+id);
    }

    // Метод преобразование массива в объект 
    arrToObject(arr): {}{
        let obj = {};
        
        for(let i = 0; i < arr.length; i++){
            if(arr[i].$value == undefined){
                obj[arr[i].$key] = arr[i];
            }else{
                obj[arr[i].$key] = arr[i].$value;
            }
        }
        
        return obj;
    }
}