import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../services/product.service';
import { catchError, finalize, filter } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import { MetaService } from '../services/meta.service';
import { ScrollRestorationService } from '../services/scroll-restoration.service';
import { fadeAnimation } from '../animations/route-animations';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  animations: [fadeAnimation]
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  loading = true;
  error: string | null = null;
  retryCount = 0;
  maxRetries = 3;
  private routerSubscription?: Subscription;

  constructor(
    private productService: ProductService,
    private metaService: MetaService,
    private router: Router,
    private scrollRestoration: ScrollRestorationService
  ) {
    this.metaService.updateTags({
      title: 'Products - Angular Routing Demo',
      description: 'Browse our selection of products with dynamic routing and animations',
      url: window.location.href
    });
  }

  ngOnInit(): void {
    this.loadProducts();

    // Set up navigation tracking for scroll position
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Save scroll position when navigating away
      this.scrollRestoration.saveScrollPosition('/products');
    });

    // Restore scroll position if returning to the page
    if (this.router.url === '/products') {
      this.scrollRestoration.restoreScrollPosition('/products');
    }
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  private loadProducts(isRetry = false): void {
    if (isRetry) {
      this.retryCount++;
    }

    this.productService.getProducts()
      .pipe(
        catchError(err => {
          if (this.retryCount < this.maxRetries) {
            setTimeout(() => this.loadProducts(true), 1000 * this.retryCount);
          } else {
            this.error = 'Failed to load products. Please try again later.';
          }
          return of([]);
        }),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(products => {
        this.products = products;
        if (products.length > 0) {
          this.error = null;
          this.retryCount = 0;
        }
      });
  }

  retryLoading(): void {
    this.loading = true;
    this.error = null;
    this.retryCount = 0;
    this.loadProducts();
  }

  trackById(index: number, product: Product): number {
    return product.id;
  }

  handleKeyPress(event: KeyboardEvent) {
    event.preventDefault();
    (event.target as HTMLElement).click();
  }
}
