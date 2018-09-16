import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.scss']
})
export class OrderDisplayComponent implements OnInit {
  @Input()
  order: any;
  expand = false;
  symbol = '+';
  add = false;

  constructor(private service: OrdersService) {}

  ngOnInit() {}

  expandOnClick() {
    this.expand = !this.expand;
    this.symbol = this.symbol === '-' ? '+' : '-';
  }

  clickedAddProduct() {
    this.add = !this.add;
  }

  addProduct(product) {
    this.order.orderLines.push(product);
    product.orderId = this.order.id;
    this.service.create(product).subscribe(result => console.log('Added:', result));
  }
}
