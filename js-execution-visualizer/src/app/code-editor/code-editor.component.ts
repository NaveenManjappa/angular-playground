import { Component } from '@angular/core';
import { EngineService } from '../services/engine.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
export class CodeEditorComponent {
  /**
   *
   */
  constructor(public engine: EngineService) {
    
    
  }
  code = `console.log("1");
  setTimeout(() => console.log("2"), 0);
setTimeout(() => console.log("5"), 0);
  Promise.resolve().then(() => console.log("3"));
  console.log("4");`;
  
  runCode() {
    this.engine.resetSteps();
  
    this.engine.addSteps([
      {
        label: 'console.log("1") — push',
        action: () => {
          this.engine.pushToCallStack('console.log("1")');
        }
      },
      {
        label: 'console.log("1") — exec + pop',
        action: () => {
          console.log("1");
          this.engine.popFromCallStack();
        }
      },
      {
        label: 'setTimeout(...)',
        action: () => {
          this.engine.addWebApi('setTimeout (→ console.log("2"))');
        }
      },
      {
        label: 'Promise.then(...)',
        action: () => {
          this.engine.addMicrotask('Promise.then (→ console.log("3"))');
        }
      },
      {
        label: 'console.log("4") — push',
        action: () => {
          this.engine.pushToCallStack('console.log("4")');
        }
      },
      {
        label: 'console.log("4") — exec + pop',
        action: () => {
          console.log("4");
          this.engine.popFromCallStack();
        }
      },
      {
        label: 'Flush microtasks',
        action: () => {
          this.engine.flushQueues();
          console.log("3");
        }
      },
      {
        label: 'Flush callbacks',
        action: () => {
          this.engine.flushQueues();
          console.log("2");
        }
      }
    ]);
  }
  
  
  
}
