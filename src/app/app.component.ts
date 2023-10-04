import { Component } from '@angular/core';
import { MapServiceService } from './services/map-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  Name!: string;
  Capital!: string;
  Region!: string;
  IncomeLevel!: string;
  Latitude!: number;
  Longitude!: number;

  constructor(private mapService: MapServiceService) {
    this.mapService.country$.subscribe((data)=> {
      this.Name = data[1][0].name;
      this.Capital = data[1][0].capitalCity;
      this.Region = data[1][0].region.value;
      this.IncomeLevel = data[1][0].incomeLevel.value;
      this.Latitude = data[1][0].latitude;
      this.Longitude = data[1][0].longitude;
     })
  }

}
