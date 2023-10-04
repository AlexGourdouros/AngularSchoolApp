import { Component } from '@angular/core';
import { MapServiceService } from '../services/map-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
 
  constructor(private mapService: MapServiceService) {}

  ngOnInit(): void {
    this.getMap();
  }

 public getMap(){

  let elements = document.getElementsByTagName('path');
  let countryCount = elements.length;

  for (let i = 0; i < countryCount; i++) {
    elements[i].onclick = (e: Event) => {
    if((e.target as HTMLButtonElement).getAttribute('id') != null){
     this.mapService.getInfo((e.target as HTMLButtonElement).getAttribute('id')?.toString());
      }
    }
   }
 }
}
