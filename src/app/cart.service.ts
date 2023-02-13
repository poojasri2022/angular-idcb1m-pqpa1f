import { Injectable } from '@angular/core';
import { Product, products } from './products';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[]=[];

  constructor() { }

  addItems(product:Product)
  {
    this.items.push(product);
  }
}
