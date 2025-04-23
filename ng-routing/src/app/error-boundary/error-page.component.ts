import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ErrorLoggingService, ErrorLog } from '../services/error-logging.service';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-[400px] flex items-center justify-center">
      <div class="text-center max-w-2xl mx-auto p-6">
        <h1 class="text-6xl font-bold text-red-600 mb-4">Error</h1>
        <p class="text-xl text-gray-600 mb-4">{{ errorMessage }}</p>
        
        <div class="text-sm text-gray-500 mb-6">
          Error ID: {{ errorId }}
        </div>

        <div class="space-y-4 mb-8">
          <a routerLink="/home" 
             class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block mr-4">
            Return Home
          </a>
          <button (click)="reloadPage()" 
                  class="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 inline-block">
            Reload Page
          </button>
        </div>

        <div *ngIf="recentErrors.length > 0" class="mt-8 text-left">
          <details class="bg-gray-100 rounded-lg p-4">
            <summary class="cursor-pointer text-gray-700 font-medium">Recent Error History</summary>
            <div class="mt-4 space-y-2">
              <div *ngFor="let error of recentErrors" class="text-sm">
                <div class="text-gray-600">{{ error.timestamp | date:'medium' }}</div>
                <div class="text-red-600">{{ error.message }}</div>
                <div class="text-gray-500">URL: {{ error.url }}</div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  `
})
export class ErrorPageComponent implements OnInit {
  errorMessage = 'An unexpected error occurred';
  errorId = '';
  recentErrors: ErrorLog[] = [];

  constructor(
    private route: ActivatedRoute,
    private errorLogger: ErrorLoggingService,
    private metaService: MetaService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.errorMessage = params['message'] || this.errorMessage;
      this.errorId = params['id'] || new Date().getTime().toString();
      
      // Update meta tags for error page
      this.metaService.updateTags({
        title: 'Error - Angular Routing Demo',
        description: this.errorMessage
      });
    });

    // Get recent errors for debugging
    this.recentErrors = this.errorLogger.getRecentErrors().slice(0, 5);
  }

  reloadPage(): void {
    window.location.reload();
  }
}