// src/app/components/call-stack/call-stack.component.ts
import { Component } from '@angular/core';
import { EngineService } from '../services/engine.service';


@Component({
  selector: 'app-call-stack',
  template: `
  <div class="bg-white rounded-xl shadow p-4">
    <h2 class="font-bold text-lg mb-2">📞 Call Stack</h2>
    <div *ngFor="let item of engine.callStack" class="bg-blue-100 px-2 py-1 my-1 rounded">
      {{ item }}
    </div>
    <div *ngIf="!engine.callStack.length" class="text-gray-500 italic">Empty</div>
  </div>
  `
})
export class CallStackComponent {
  constructor(public engine: EngineService) {}
}
