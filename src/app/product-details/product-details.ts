import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/ProductService';
import { IProduct } from '../services/IProduct';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  product: IProduct | undefined;
  constructor() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.product = this.productService.getProductById(id);
    });
  }
}
