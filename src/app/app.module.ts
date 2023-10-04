import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { HttpClientModule } from '@angular/common/http';
import { MapServiceService } from './services/map-service.service';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [MapServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
