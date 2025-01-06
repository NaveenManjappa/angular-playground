import { ChangeDetectorRef, Component, computed, DoCheck, effect, OnInit, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent implements OnInit,DoCheck {
  count:WritableSignal<number> = signal(1);
  computedCount:Signal<number> = computed(() => this.count() * 2);

  showCount =signal(false);

  conditionalCount = computed(() => {
    if(this.showCount())
      return `The count is ${this.count()}`;
    else 
    return `Nothing to show`;
  });

  bCount = 1;
  detectionRuns = 0;

  constructor(private cdr:ChangeDetectorRef){
    //cdr.detach();
    effect(() => {
      localStorage.setItem('counter',this.count().toString());
    }
    );
  }

  ngOnInit(): void {
    console.log('On init');
    //this.cdr.detectChanges();
  }

  ngDoCheck():void {
    this.detectionRuns++;
    console.log('Change detection runs');
  }

  increment(){
    this.count.update(value => value + 1);
    console.log(this.count());
    //this.showCount.set(true);
  }

  incrementCounter(){
    this.bCount = this.bCount + 1;
    console.log(this.bCount);
  }
}
