import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NhomQuyenService {
  private url = 'http://localhost:8080';
  constructor(private http : HttpClient) {
  }
  getAllNhomQuyen(): Observable<any>{
    return this.http.get(`${this.url}/nhomquyen/all`);
  }

}
