import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { vehicle } from '../models/vehicle';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  server  = `${environment.servidor}/vehicle`

  constructor(
    private http : HttpClient

  ) { }

  getVehicle():Observable<any> {
    let url = this.server
    return this.http.get(url);

  }
  getVehicleById(id: number):Observable<any> {
    let url = this.server
    return this.http.get(`${url}/${id}`);

  }
  getReporte(): Observable<any> {

    let url = `${this.server}/info`
    return this.http.get(url);
  }
  postVehicle(vehicle : vehicle):Observable<any> {
    let url = this.server
    return this.http.post(url, vehicle);
  }


}
