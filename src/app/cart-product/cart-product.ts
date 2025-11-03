import { Component } from '@angular/core';
import { ProductService } from '../services/ProductService';
import { ProductCart } from '../product-card/product-card';

@Component({
  selector: 'app-cart-product',
  imports: [ProductCart],
  templateUrl: './cart-product.html',
  styleUrl: './cart-product.css',
})
export class CartProduct {
  cartProducts;
  constructor(productService: ProductService) {
    this.cartProducts = productService.getCart();
    console.log(this.cartProducts(), 'hh');
  }
}
