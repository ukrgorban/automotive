import { Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'cars',
        pathMatch: 'full'
    },
    /*{
        path: 'home',
        component: HomeComponent
    },*/
    {
        path: 'cars',
        component: CarsListComponent
    },
    {
        path: 'car/:id',
        component: CarDetailsComponent
    }
]