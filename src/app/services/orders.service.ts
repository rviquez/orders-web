import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OrdersService extends DataService {
  constructor(http: Http, httpClient: HttpClient) {
    super('http://localhost:3000/orders', http, httpClient);
  }
}
