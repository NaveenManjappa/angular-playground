import { Injectable, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollRestorationService {
  private viewportScroller = inject(ViewportScroller);
  private router = inject(Router);
  private scrollPositions = new Map<string, [number, number]>();

  init() {
    this.router.events.pipe(
      filter(e => e instanceof Scroll)
    ).subscribe(e => {
      if (!(e instanceof Scroll)) return;
      
      setTimeout(() => {
        if (e.position) {
          this.viewportScroller.scrollToPosition(e.position);
        } else if (e.anchor) {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
    });
  }

  saveScrollPosition(route: string): void {
    const position = this.viewportScroller.getScrollPosition();
    this.scrollPositions.set(route, position);
  }

  restoreScrollPosition(route: string): void {
    const position = this.scrollPositions.get(route);
    if (position) {
      setTimeout(() => this.viewportScroller.scrollToPosition(position));
    }
  }
}