import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CurrencyIndianPipe } from '../../pipes/currency-indian.pipe';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyIndianPipe],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class CheckoutComponent implements OnInit {
  // Cart items and totals
  cartItems: any[] = [];
  totalPrice = 0;
  
  // Payment states
  paymentCompleted = false;
  paymentInProgress = false;
  selectedPaymentMethod = '';
  orderId = '';
  
  // Form data
  shippingInfo = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India'
  };
  
  paymentMethods = [
    { id: 'credit-card', name: 'Credit Card', icon: '💳' },
    { id: 'debit-card', name: 'Debit Card', icon: '🏧' },
    { id: 'upi', name: 'UPI', icon: '📱' },
    { id: 'wallet', name: 'Digital Wallet', icon: '👛' },
    { id: 'cod', name: 'Cash on Delivery', icon: '🚚' }
  ];
  
  deliveryOptions = [
    { id: 'standard', name: 'Standard Delivery (5-7 days)', price: 0 },
    { id: 'express', name: 'Express Delivery (2-3 days)', price: 50 },
    { id: 'same-day', name: 'Same Day Delivery', price: 100 }
  ];
  
  selectedDelivery = 'standard';
  
  constructor(
    private cartService: CartService,
    private router: Router
  ) {}
  
  ngOnInit() {
    // Get cart items
    this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }
  
  calculateTotal() {
    this.totalPrice = this.cartItems.reduce((sum, item) => {
      return sum + (item.product.price * item.quantity);
    }, 0);
  }
  
  getDeliveryCharges() {
    const selected = this.deliveryOptions.find(d => d.id === this.selectedDelivery);
    return selected?.price || 0;
  }
  
  getFinalTotal() {
    return this.totalPrice + this.getDeliveryCharges();
  }
  
  selectPaymentMethod(methodId: string) {
    this.selectedPaymentMethod = methodId;
  }
  
  isFormValid() {
    return this.shippingInfo.firstName &&
           this.shippingInfo.lastName &&
           this.shippingInfo.email &&
           this.shippingInfo.phone &&
           this.shippingInfo.street &&
           this.shippingInfo.city &&
           this.shippingInfo.state &&
           this.shippingInfo.zipCode &&
           this.selectedPaymentMethod;
  }
  
  processPayment() {
    if (!this.isFormValid()) {
      alert('Please fill all required fields and select a payment method');
      return;
    }
    
    // Show payment in progress
    this.paymentInProgress = true;
    
    // Simulate payment processing (3 seconds)
    setTimeout(() => {
      this.paymentInProgress = false;
      this.paymentCompleted = true;
      
      // Generate order ID
      this.orderId = '#' + Math.floor(Math.random() * 100000);
      
      // Clear cart after successful payment
      this.cartService.clearCart();
      
      // Redirect to home after 3 seconds
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000);
    }, 3000);
  }
  
  continueShoppingAfterSuccess() {
    this.router.navigate(['/']);
  }
}
