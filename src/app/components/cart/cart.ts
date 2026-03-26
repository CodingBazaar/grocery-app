import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CurrencyIndianPipe } from '../../pipes/currency-indian.pipe';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CurrencyIndianPipe
  ],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCart().subscribe((items) => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  calculateTotal(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  updateQuantity(item: CartItem, newQuantity: number): void {
    if (newQuantity < 1) {
      this.removeItem(item.product.id);
    } else {
      this.cartService.updateQuantity(item.product.id, newQuantity);
      this.calculateTotal();
    }
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.calculateTotal();
  }

  checkout(): void {
    this.router.navigate(['/checkout']);
  }

  continueShopping(): void {
    // Navigation to products page will be handled by router
  }
}
