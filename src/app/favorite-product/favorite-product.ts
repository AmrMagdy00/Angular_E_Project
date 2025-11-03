import { Component } from '@angular/core';
import { ProductService } from '../services/ProductService';
import { ProductCart } from '../product-card/product-card';

@Component({
  selector: 'app-favorite-product',
  imports: [ProductCart],
  templateUrl: './favorite-product.html',
  styleUrl: './favorite-product.css',
})
export class FavoriteProduct {
  favouriteProducts;
  constructor(productService: ProductService) {
    this.favouriteProducts = productService.getFavorites();
    console.log(this.favouriteProducts());
  }
}
