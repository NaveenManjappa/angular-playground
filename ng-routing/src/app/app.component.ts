import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { NgIf, AsyncPipe } from '@angular/common';
import { AuthService } from './services/auth.service';
import { LoadingService } from './services/loading.service';
import { FocusService } from './services/focus.service';
import { fadeAnimation } from './animations/route-animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  private authService: AuthService;
  isAuthenticated$;
  isNavigating = false;
  loading$;

  constructor(
    authService: AuthService, 
    private router: Router,
    private loadingService: LoadingService,
    private focusService: FocusService
  ) {
    this.authService = authService;
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isNavigating = true;
        this.loadingService.show();
        this.focusService.saveLastActiveElement();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.isNavigating = false;
        this.loadingService.hide();

        // Only restore focus on NavigationCancel or NavigationError
        if (event instanceof NavigationCancel || event instanceof NavigationError) {
          this.focusService.restoreLastFocus();
        }
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }

  getRouteState(outlet: RouterOutlet) {
    return outlet.activatedRouteData['title'] || 'Home';
  }

  handleMenuKeyPress(event: KeyboardEvent): void {
    const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
    const currentIndex = menuItems.indexOf(document.activeElement as Element);

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        if (currentIndex < menuItems.length - 1) {
          (menuItems[currentIndex + 1] as HTMLElement).focus();
        } else {
          (menuItems[0] as HTMLElement).focus();
        }
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        if (currentIndex > 0) {
          (menuItems[currentIndex - 1] as HTMLElement).focus();
        } else {
          (menuItems[menuItems.length - 1] as HTMLElement).focus();
        }
        break;

      case 'Home':
        event.preventDefault();
        (menuItems[0] as HTMLElement).focus();
        break;

      case 'End':
        event.preventDefault();
        (menuItems[menuItems.length - 1] as HTMLElement).focus();
        break;

      case 'Escape':
        event.preventDefault();
        this.focusService.restoreLastFocus();
        break;
    }
  }
}
