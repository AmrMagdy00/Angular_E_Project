import { Component, signal } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { Header } from './Shared/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ProductList, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular_Tasks');
}
