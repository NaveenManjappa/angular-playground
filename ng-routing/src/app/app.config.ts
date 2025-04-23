import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter, withViewTransitions, withHashLocation, withRouterConfig } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ScrollRestorationService } from './services/scroll-restoration.service';
import { PageTitleStrategy } from './services/title.service';
import { TitleStrategy } from '@angular/router';
import { GlobalErrorHandler } from './error-boundary/error-boundary.component';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
        urlUpdateStrategy: 'eager',
        canceledNavigationResolution: 'replace'
      })
    ),
    provideAnimations(),
    ScrollRestorationService,
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategy
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
};
