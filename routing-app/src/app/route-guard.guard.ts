import { state } from '@angular/animations';
import { CanActivateFn } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {
  return false;
};

export const routeGuard2: CanActivateFn = (route,state) => {
  return true;
}
