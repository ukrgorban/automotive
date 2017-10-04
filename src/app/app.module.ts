import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// components
//import { HomeComponent } from './home/home.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';

// services
import { CarService } from './shared/car.service';

//pipes
import { SearchPipe } from './pipes';

@NgModule({
  declarations: [
      AppComponent,
      //HomeComponent,
      CarsListComponent,
      CarDetailsComponent,
      SearchPipe
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(routes),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFireAuthModule 
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
