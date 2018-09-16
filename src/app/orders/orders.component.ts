import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor(private service: OrdersService) {}

  ngOnInit() {
    this.service
      .getSpecific('/status/1')
      .subscribe(order => (this.orders = order));
  }
}
