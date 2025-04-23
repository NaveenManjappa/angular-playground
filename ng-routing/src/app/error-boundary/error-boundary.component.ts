import { Component, ErrorHandler, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ErrorLoggingService } from '../services/error-logging.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private router: Router,
    private errorLogger: ErrorLoggingService
  ) {}

  handleError(error: any): void {
    // Log the error
    this.errorLogger.logError(error, 'GlobalErrorHandler');

    // Navigate to error page
    this.router.navigate(['/error'], { 
      queryParams: { 
        message: 'An unexpected error occurred. Please try again later.',
        id: new Date().getTime() // Add unique ID for error tracking
      }
    });
  }
}