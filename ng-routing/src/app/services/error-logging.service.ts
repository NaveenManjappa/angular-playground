import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface ErrorLog {
  message: string;
  stack?: string;
  timestamp: Date;
  url: string;
  userId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorLoggingService {
  private readonly maxStoredLogs = 50;
  private errorLogs: ErrorLog[] = [];

  constructor(private router: Router) {
    this.loadStoredLogs();
  }

  logError(error: Error | string, context?: string): void {
    const errorLog: ErrorLog = {
      message: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date(),
      url: this.router.url,
      userId: localStorage.getItem('userId') || undefined
    };

    this.errorLogs.unshift(errorLog);
    
    // Keep only the latest logs
    if (this.errorLogs.length > this.maxStoredLogs) {
      this.errorLogs = this.errorLogs.slice(0, this.maxStoredLogs);
    }

    // Store logs in localStorage
    this.persistLogs();

    // In a real app, you would send this to your error tracking service
    console.error('Error logged:', { ...errorLog, context });
  }

  getRecentErrors(): ErrorLog[] {
    return [...this.errorLogs];
  }

  clearLogs(): void {
    this.errorLogs = [];
    localStorage.removeItem('errorLogs');
  }

  private loadStoredLogs(): void {
    const storedLogs = localStorage.getItem('errorLogs');
    if (storedLogs) {
      try {
        this.errorLogs = JSON.parse(storedLogs);
      } catch {
        this.errorLogs = [];
      }
    }
  }

  private persistLogs(): void {
    localStorage.setItem('errorLogs', JSON.stringify(this.errorLogs));
  }
}