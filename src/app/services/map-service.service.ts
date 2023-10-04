import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  private: any = new Subject<any>();
  country$ = this.private.asObservable(); 

  constructor(private http: HttpClient) { }

  getInfo(param?: any){
    this.http.get(`http://api.worldbank.org/v2/country/${param}?format=json`).
    subscribe((data) => {
      return this.private.next(data);
    });
  }

  getCurrentResults(): Observable<any> {
    return this.country$;
}
}
