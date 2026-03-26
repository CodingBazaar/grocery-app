import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubject = new BehaviorSubject<string>('');
  private categorySubject = new BehaviorSubject<string>('All');

  getSearchQuery(): Observable<string> {
    return this.searchSubject.asObservable();
  }

  setSearchQuery(query: string): void {
    this.searchSubject.next(query);
  }

  getCategoryFilter(): Observable<string> {
    return this.categorySubject.asObservable();
  }

  setCategoryFilter(category: string): void {
    this.categorySubject.next(category);
  }
}
