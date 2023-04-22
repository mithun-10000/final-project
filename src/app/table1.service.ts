import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Table1Service {

  httpOptions: { headers: any };

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'cache-control': 'no-cache',
        pramga: 'no-cache',
      }),
    };
  }

  getProductData(): Observable<any> {
    let apiUrl = 'https://dummyjson.com/products';
    return this.httpClient.get(apiUrl);
  }
}
