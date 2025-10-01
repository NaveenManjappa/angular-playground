import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ReactiveFormsModule } from '@angular/forms';
import { Registration } from './registration/registration';

@NgModule({
  declarations: [
    App,
    Registration
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
