import { Component } from '@angular/core';
import { EngineService } from '../services/engine.service';


@Component({
  selector: 'app-web-api-queue',
  template: `
  <div class="bg-white rounded-xl shadow p-4">
    <h2 class="font-bold text-lg mb-2">🌐 Web APIs</h2>
    <div *ngFor="let api of engine.webApis" class="bg-yellow-100 px-2 py-1 my-1 rounded">
      {{ api }}
    </div>
    <div *ngIf="!engine.webApis.length" class="text-gray-500 italic">No active APIs</div>
  </div>
  `
})
export class WebApiQueueComponent {
  constructor(public engine: EngineService) {}
}