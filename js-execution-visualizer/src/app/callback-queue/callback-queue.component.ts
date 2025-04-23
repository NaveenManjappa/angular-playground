// src/app/components/callback-queue/callback-queue.component.ts
import { Component } from '@angular/core';
import { EngineService } from '../services/engine.service';


@Component({
  selector: 'app-callback-queue',
  template: `
  <div class="bg-white rounded-xl shadow p-4">
    <h2 class="font-bold text-lg mb-2">🕑 Callback Queue</h2>
    <div *ngFor="let cb of engine.callbackQueue" class="bg-green-100 px-2 py-1 my-1 rounded">
      {{ cb }}
    </div>
    <div *ngIf="!engine.callbackQueue.length" class="text-gray-500 italic">Empty</div>
  </div>
  `
})
export class CallbackQueueComponent {
  constructor(public engine: EngineService) {}
}
