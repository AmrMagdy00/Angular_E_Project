import { SlicePipe } from './../Shared/pipes/slice-pipe/slice-pipe';
import { ProductService } from '../services/ProductService';
import { Component, inject, input } from '@angular/core';
import { IProduct } from '../services/IProduct';
import { shadowDirective } from './shadowDirective';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [shadowDirective, CurrencyPipe, SlicePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCart {
  private router = inject(Router);

  product = input.required<IProduct>();
  hasFavourite = input<boolean>(true);
  hasAddToCart = input<boolean>(true);

  productService;
  constructor(productService: ProductService) {
    this.productService = productService;
  }

  addToCart() {
    this.productService.addToCart(this.product());
  }

  addToFavorite() {
    this.productService.addToFavorites(this.product());
  }

  navigateToDetails() {
    this.router.navigate(['/product', this.product().id]);
  }
}
