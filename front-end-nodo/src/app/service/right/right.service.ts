import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RightService {
  private url = 'http://localhost:8080/right';
  constructor(private http : HttpClient) { }

  getRightAll(): Observable<any>{
    return this.http.get(`${this.url}/all`);
  }
}
