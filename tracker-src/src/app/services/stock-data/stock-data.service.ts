import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class StockDataService {

  constructor(private http: Http) { }

  getStockData(stock) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://127.0.0.1:8080/stocks/data', stock, { headers: headers })
      .map(res => res.json());
  }
}
