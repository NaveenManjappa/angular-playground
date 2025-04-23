import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ErrorLoggingService } from '../services/error-logging.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const errorLogger = inject(ErrorLoggingService);

  if (authService.isAuthenticated()) {
    return true;
  }

  // Log unauthorized access attempt
  errorLogger.logError(
    `Unauthorized access attempt to ${state.url}`,
    'AuthGuard'
  );

  // Store attempted URL for redirect after login
  localStorage.setItem('redirectUrl', state.url);
  
  // Navigate to login
  router.navigate(['/login']);
  return false;
};
