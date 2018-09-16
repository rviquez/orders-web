import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productId: number;
  description: string;
  price: number;
  quantity: number;
  @Output()
  productCreated = new EventEmitter<any>();
  @Output()
  saved = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  addProductToOrder(product) {
    this.productCreated.emit(product);
    this.saved.emit();
  }
  cancel() {
    this.saved.emit();
  }
}
