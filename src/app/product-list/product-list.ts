import { ProductService } from './../services/ProductService';
import { Component } from '@angular/core';
import { ProductCart } from '../product-card/product-card';
import { IProduct } from '../services/IProduct';

@Component({
  selector: 'app-product-list',
  imports: [ProductCart],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }
}
