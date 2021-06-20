import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherhomeComponent } from './weatherhome/weatherhome.component';
import { WeatherdetailsComponent } from './weatherhome/weatherdetails/weatherdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { HelperService } from './helper.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    WeatherhomeComponent,
    WeatherdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      preventDuplicates:true
    })
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
