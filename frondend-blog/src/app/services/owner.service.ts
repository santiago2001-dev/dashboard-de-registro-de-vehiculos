import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { onwer } from '../models/owner';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  server = `${environment.servidor}/owner`;

  constructor(private http: HttpClient) {}

  getOnwer(): Observable<any> {
    let url = this.server;
    return this.http.get(url);
  }
  getOnwerById(id: number): Observable<any> {
    let url = this.server;
    return this.http.get(`${url}/${id}`);
  }

  postOnwer(onwer: onwer): Observable<any> {
    let url = this.server;
    return this.http.post(url, onwer);
  }
}
