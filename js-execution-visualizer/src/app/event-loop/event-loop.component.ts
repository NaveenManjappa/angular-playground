// src/app/components/event-loop/event-loop.component.ts
import { Component } from '@angular/core';
import { EngineService } from '../services/engine.service';


@Component({
  selector: 'app-event-loop',
  template: `
  <div class="bg-white rounded-xl shadow p-4 text-center">
    <h2 class="font-bold text-lg mb-2">🔁 Event Loop</h2>
    <p class="text-sm text-gray-700">Moves microtasks & callbacks to call stack when it's empty.</p>
    <button (click)="engine.flushQueues()" class="mt-3 px-4 py-1 bg-teal-600 text-white rounded hover:bg-teal-700">
      Tick ⏳
    </button>
  </div>
  `
})
export class EventLoopComponent {
  constructor(public engine: EngineService) {}
}
