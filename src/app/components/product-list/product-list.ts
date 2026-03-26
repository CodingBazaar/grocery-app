import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CurrencyIndianPipe } from '../../pipes/currency-indian.pipe';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { SearchService } from '../../services/search.service';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatSnackBarModule,
    CurrencyIndianPipe,
    RouterModule
  ],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories = ['All', 'Fruits', 'Dairy', 'Snacks'];
  selectedCategory: string = 'All';
  searchTerm: string = '';
  private destroy$ = new Subject<void>();

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private searchService: SearchService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.subscribeToSearchService();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private subscribeToSearchService(): void {
    this.searchService.getSearchQuery()
      .pipe(takeUntil(this.destroy$))
      .subscribe(query => {
        this.searchTerm = query;
        this.applyFilters();
      });

    this.searchService.getCategoryFilter()
      .pipe(takeUntil(this.destroy$))
      .subscribe(category => {
        this.selectedCategory = category;
        this.applyFilters();
      });
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.applyFilters();
    });
  }

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
    this.searchService.setCategoryFilter(category);
    this.applyFilters();
  }

  onSearch(query: string): void {
    this.searchTerm = query;
    this.searchService.setSearchQuery(query);
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = this.products;

    // Apply category filter
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    // Apply search filter
    if (this.searchTerm.trim()) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.filteredProducts = filtered;
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product, 1);
    this.snackBar.open(`${product.name} added to cart!`, 'Close', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

  getCategoryEmoji(category: string): string {
    const emojiMap: { [key: string]: string } = {
      'All': '🛒',
      'Fruits': '🍎',
      'Dairy': '🥛',
      'Snacks': '🍿'
    };
    return emojiMap[category] || '🛍️';
  }

  getGridColumns(): number {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 1200) return 2;
    return 3;
  }
}
