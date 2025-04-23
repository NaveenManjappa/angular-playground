// src/app/components/microtask-queue/microtask-queue.component.ts
import { Component } from '@angular/core';
import { EngineService } from '../services/engine.service';


@Component({
  selector: 'app-microtask-queue',
  template: `
  <div class="bg-white rounded-xl shadow p-4">
    <h2 class="font-bold text-lg mb-2">⚡ Microtask Queue</h2>
    <div *ngFor="let task of engine.microtaskQueue" class="bg-purple-100 px-2 py-1 my-1 rounded">
      {{ task }}
    </div>
    <div *ngIf="!engine.microtaskQueue.length" class="text-gray-500 italic">Empty</div>
  </div>
  `
})
export class MicrotaskQueueComponent {
  constructor(public engine: EngineService) {}
}
