import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NhomQuyenMenuService {
  private url = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  getAllNhomQuyenMenu(): Observable<any> {
    return this.http.get(`${this.url}/nhomquyenmn/all`);
  }
  getNhomQuyenMenuById(id: number): Observable<any> {
    return this.http.get(`${this.url}/nhomquyenmn/${id}`);
  }
  updateRightNhomQuyenMenu(data: any): Observable<Object> {
    return this.http.put(`${this.url}/nhomquyenmn/update`, data);
  }
}
