import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

// components
//import { HomeComponent } from './home/home.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';

// services
import { CarService } from './shared/car.service';

@NgModule({
  declarations: [
      AppComponent,
      //HomeComponent,
      CarsListComponent,
      CarDetailsComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
