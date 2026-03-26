import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    // Fruits
    { id: 1, name: 'Fresh Apples', price: 120, category: 'Fruits', image: 'assets/apple.jpg', description: 'Fresh red apples' },
    { id: 2, name: 'Banana Bunch', price: 40, category: 'Fruits', image: 'assets/banana.jpg', description: 'Golden yellow bananas' },
    { id: 3, name: 'Orange Pack', price: 80, category: 'Fruits', image: 'assets/orange.jpg', description: 'Juicy oranges' },
    { id: 4, name: 'Strawberries', price: 250, category: 'Fruits', image: 'assets/strawberry.jpg', description: 'Fresh strawberries' },
    { id: 5, name: 'Watermelon', price: 100, category: 'Fruits', image: 'assets/watermelon.jpg', description: 'Sweet watermelon' },
    
    // Dairy
    { id: 6, name: 'Fresh Milk', price: 60, category: 'Dairy', image: 'assets/milk.jpg', description: 'Pure cow milk 1L' },
    { id: 7, name: 'Yogurt Cup', price: 30, category: 'Dairy', image: 'assets/yogurt.jpg', description: 'Fresh yogurt 200ml' },
    { id: 8, name: 'Cheddar Cheese', price: 150, category: 'Dairy', image: 'assets/cheese.jpg', description: 'Block of cheddar cheese' },
    { id: 9, name: 'Butter 200g', price: 120, category: 'Dairy', image: 'assets/butter.jpg', description: 'Pure butter' },
    { id: 10, name: 'Paneer 200g', price: 100, category: 'Dairy', image: 'assets/paneer.jpg', description: 'Fresh paneer cheese' },
    
    // Snacks
    { id: 11, name: 'Potato Chips', price: 50, category: 'Snacks', image: 'assets/chips.jpg', description: 'Crispy potato chips 50g' },
    { id: 12, name: 'Cookies Pack', price: 80, category: 'Snacks', image: 'assets/cookies.jpg', description: 'Assorted cookies 200g' },
    { id: 13, name: 'Granola Bar', price: 40, category: 'Snacks', image: 'assets/granola.jpg', description: 'Healthy granola bar' },
    { id: 14, name: 'Popcorn', price: 60, category: 'Snacks', image: 'assets/popcorn.jpg', description: 'Salted popcorn 100g' },
    { id: 15, name: 'Chocolate Mix', price: 120, category: 'Snacks', image: 'assets/chocolate.jpg', description: 'Mixed chocolates' }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  constructor() {}

  // Get all products
  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  // Get product by ID
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  // Get products by category
  getProductsByCategory(category: string): Observable<Product[]> {
    const filtered = category === 'All' 
      ? this.products 
      : this.products.filter(p => p.category === category);
    return new BehaviorSubject(filtered).asObservable();
  }

  // Search products
  searchProducts(query: string): Observable<Product[]> {
    const filtered = this.products.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    return new BehaviorSubject(filtered).asObservable();
  }
}
