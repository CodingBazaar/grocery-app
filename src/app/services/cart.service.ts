import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems);
  private cartCountSubject = new BehaviorSubject<number>(0);

  constructor() {
    this.loadCartFromLocalStorage();
  }

  // Get cart items as observable
  getCart(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  // Get cart item count as observable
  getCartCount(): Observable<number> {
    return this.cartCountSubject.asObservable();
  }

  // Add product to cart
  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity });
    }

    this.updateCart();
  }

  // Remove product from cart
  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.updateCart();
  }

  // Update quantity of a product
  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.updateCart();
      }
    }
  }

  // Get total price
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  // Clear cart
  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  // Get current cart items (synchronous)
  getCartItemsSync(): CartItem[] {
    return this.cartItems;
  }

  // Private method to update cart state
  private updateCart(): void {
    this.cartSubject.next(this.cartItems);
    this.cartCountSubject.next(this.cartItems.length);
    this.saveCartToLocalStorage();
  }

  // Save cart to localStorage
  private saveCartToLocalStorage(): void {
    localStorage.setItem('groceryCart', JSON.stringify(this.cartItems));
  }

  // Load cart from localStorage
  private loadCartFromLocalStorage(): void {
    const saved = localStorage.getItem('groceryCart');
    if (saved) {
      try {
        this.cartItems = JSON.parse(saved);
        this.cartSubject.next(this.cartItems);
        this.cartCountSubject.next(this.cartItems.length);
      } catch (e) {
        console.error('Error loading cart from localStorage', e);
      }
    }
  }
}
