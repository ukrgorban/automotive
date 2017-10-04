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
    
    //определение индекса массива по id объекта
    findIndex(arr, id){
        if(arr.length > 0){
            for(let i = 0; i < arr.length; i++){
                let obj = arr[i];
                if(obj.id === id){
                    return i;
                }
            }
        }
        return -1;
    }

    //метод поиска фразы в массиве объектов по конкретному свойству
    searchData(arr, searchData, name){
        searchData = searchData.toLowerCase();
        
        if(arr.length > 0){
            let resArr = [];
            
            for(let i = 0; i < arr.length; i++){
                let str = arr[i][name];
                str = str.toLowerCase();
                let res = str.indexOf(searchData);
                if(res !== -1){
                    resArr.push(arr[i]);
                }
            }
            
            if(resArr.length > 0){
                return resArr;
            }else{
                return false;
            }
        }
        return null;
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