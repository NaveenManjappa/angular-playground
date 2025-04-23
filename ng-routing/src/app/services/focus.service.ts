import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FocusService {
  private lastActiveElement: HTMLElement | null = null;

  constructor(private router: Router) {
    this.setupRouteChangeHandler();
  }

  private setupRouteChangeHandler(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.focusMainContent();
    });
  }

  saveLastActiveElement(): void {
    this.lastActiveElement = document.activeElement as HTMLElement;
  }

  restoreLastFocus(): void {
    if (this.lastActiveElement) {
      this.lastActiveElement.focus();
      this.lastActiveElement = null;
    }
  }

  private focusMainContent(): void {
    // Try to focus the main heading first
    const mainHeading = document.querySelector('main h1');
    if (mainHeading && mainHeading instanceof HTMLElement) {
      mainHeading.focus();
      return;
    }

    // Fallback to the main content area
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  }
}