import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherdetailsComponent } from './weatherhome/weatherdetails/weatherdetails.component';
import { WeatherhomeComponent } from './weatherhome/weatherhome.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:WeatherhomeComponent},
  {path:"weather-details",component:WeatherdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
