import { Injectable } from '@angular/core';

export interface ExecutionStep {
  label: string;
  action: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  callStack: string[] = [];
  webApis: string[] = [];
  callbackQueue: string[] = [];
  microtaskQueue: string[] = [];

  pushToCallStack(fn: string) {
    this.callStack.push(fn);
  }

  popFromCallStack() {
    this.callStack.pop();
  }

  addWebApi(api: string) {
    this.webApis.push(api);
    setTimeout(() => {
      this.webApis = this.webApis.filter(x => x !== api);
      this.callbackQueue.push(api + ' callback');
    }, 1000);
  }

  addMicrotask(task: string) {
    this.microtaskQueue.push(task);
  }

  flushQueues() {
    if (this.callStack.length === 0) {
      while (this.microtaskQueue.length) {
        this.pushToCallStack(this.microtaskQueue.shift()!);
        this.popFromCallStack();
      }
      if (this.callbackQueue.length) {
        const cb = this.callbackQueue.shift()!;
        this.pushToCallStack(cb);
        this.popFromCallStack();
      }
    }
  }

  clearAll() {
    this.callStack = [];
    this.webApis = [];
    this.callbackQueue = [];
    this.microtaskQueue = [];
  }

  executionSteps: ExecutionStep[] = [];
  stepIndex = 0;

  addStep(label: string, action: () => void) {
    this.executionSteps.push({ label, action });
  }
  
  addSteps(steps: ExecutionStep[]) {
    this.executionSteps.push(...steps);
  }
  

  resetSteps() {
    this.executionSteps = [];
    this.stepIndex = 0;
    this.clearAll();
  }

  nextStep() {
    if (this.stepIndex < this.executionSteps.length) {
      const step = this.executionSteps[this.stepIndex];
      step.action();
      this.stepIndex++;
    }
  }
}