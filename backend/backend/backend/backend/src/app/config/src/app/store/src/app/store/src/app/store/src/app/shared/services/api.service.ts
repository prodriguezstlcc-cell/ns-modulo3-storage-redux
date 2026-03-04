import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../../config/app.config';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  buscarItems(q: string = '', categoria: string = ''): Observable<any[]> {
    let url = AppConfig.apiUrl + '/items?';
    if (q) url += 'q=' + q + '&';
    if (categoria) url += 'categoria=' + categoria;
    return this.http.get<any[]>(url);
  }
}
