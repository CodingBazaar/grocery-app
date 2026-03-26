import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { CartComponent } from './components/cart/cart';
import { CheckoutComponent } from './components/checkout/checkout';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo: '/products' }
];
