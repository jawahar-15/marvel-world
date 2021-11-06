import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockapiService {

  constructor(private httpClient:HttpClient) { 

  }

  getValue(symbol: string) {
    const url = 'http://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+ symbol+'&interval=5min&apikey=demo';
    return this.httpClient.get(url);

  }
}
