import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {
  cartCount$: Observable<number>;
  searchTerm: string = '';

  constructor(
    private cartService: CartService,
    private searchService: SearchService
  ) {
    this.cartCount$ = this.cartService.getCartCount();
  }

  ngOnInit(): void {}

  onSearch(query: string): void {
    this.searchService.setSearchQuery(query);
  }

  onCategorySelect(category: string): void {
    this.searchService.setCategoryFilter(category);
  }
}
