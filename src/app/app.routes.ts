import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductCart } from './product-card/product-card';
import { FavoriteProduct } from './favorite-product/favorite-product';
import { CartProduct } from './cart-product/cart-product';
import { ProductDetails } from './product-details/product-details';
import { NotFound } from './not-found/not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    component: ProductList,
    canActivate: [authGuard],
  },
  { path: 'product/:id', component: ProductDetails },

  { path: 'cart', component: CartProduct },
  { path: 'favourites', component: FavoriteProduct },
  {
    path: 'login',
    loadComponent: () => import('./user-login/user-login').then((m) => m.UserLogin),
  },
  { path: '**', component: NotFound },
];
