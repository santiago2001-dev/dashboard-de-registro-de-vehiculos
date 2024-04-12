import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { onwer } from '../models/owner';

@Injectable({
  providedIn: 'root',
})
export class DirverService {
  server = `${environment.servidor}/driver`;

  constructor(private http: HttpClient) {}

  getDriver(): Observable<any> {
    let url = this.server;
    return this.http.get(url);
  }
  getDriverById(id: number): Observable<any> {
    let url = this.server;
    return this.http.get(`${url}/${id}`);
  }

  postDriver(driver: onwer): Observable<any> {
    let url = this.server;
    return this.http.post(url, driver);
  }
}
