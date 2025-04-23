import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { CallStackComponent } from './call-stack/call-stack.component';
import { WebApiQueueComponent } from './web-api-queue/web-api-queue.component';
import { CallbackQueueComponent } from './callback-queue/callback-queue.component';
import { MicrotaskQueueComponent } from './microtask-queue/microtask-queue.component';
import { EventLoopComponent } from './event-loop/event-loop.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent,
    CallStackComponent,
    WebApiQueueComponent,
    CallbackQueueComponent,
    MicrotaskQueueComponent,
    EventLoopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
