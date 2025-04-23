import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      description: 'High-performance laptop with latest specifications',
      price: 999.99
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Latest model with advanced camera features',
      price: 699.99
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Wireless noise-canceling headphones',
      price: 199.99
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Fitness tracking and notifications',
      price: 249.99
    }
  ];

  getProducts(): Observable<Product[]> {
    // Simulate API delay
    return of(this.products).pipe(delay(500));
  }

  getProduct(id: number): Observable<Product | undefined> {
    // Simulate API delay
    return of(this.products.find(p => p.id === id)).pipe(delay(500));
  }
}
