// CHILD COMPONENT
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  // Product is an interface type
  value = 'The product goes on sale';
  @Input() product!: Product;
  @Output() notify = new EventEmitter<string>();

  ngOnInit() {
    console.log(this.product.price);
  }

  emitEvent() {
    this.notify.emit(this.value);
  }

  // notify() {
  //   alert('The product goes on sale');
  // }
}
