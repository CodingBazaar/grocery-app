import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { CartComponent } from './components/cart/cart';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '/products' }
];
