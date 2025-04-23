import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../services/product.service';
import { fadeAnimation } from '../animations/route-animations';
import { Title } from '@angular/platform-browser';
import { MetaService } from '../services/meta.service';
import { ErrorLoggingService } from '../services/error-logging.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  animations: [fadeAnimation]
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: MetaService,
    private errorLogger: ErrorLoggingService
  ) {}

  ngOnInit(): void {
    // Get the resolved data
    this.route.data
      .pipe(
        catchError(err => {
          this.handleError(err);
          return of({ product: undefined });
        })
      )
      .subscribe(data => {
        this.product = data['product'];
        this.loading = false;
        
        if (this.product) {
          const title = `${this.product.name} - Angular Routing Demo`;
          this.titleService.setTitle(title);
          
          // Update meta tags for SEO and social sharing
          this.metaService.updateTags({
            title: title,
            description: this.product.description,
            url: window.location.href
          });
        } else {
          const title = 'Product Not Found - Angular Routing Demo';
          this.titleService.setTitle(title);
          this.metaService.updateTags({
            title: title,
            description: 'The requested product could not be found.',
            url: window.location.href
          });
          
          // Log product not found error
          this.handleError(new Error('Product not found'));
        }
      });
  }

  private handleError(error: Error): void {
    this.error = 'Failed to load product details. Please try again later.';
    this.errorLogger.logError(error, 'ProductDetailComponent');
  }

  goBack(): void {
    window.history.back();
  }

  reloadPage(): void {
    location.reload();
  }
}
