import { DOCUMENT } from "@angular/common";
import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output } from "@angular/core";
import { filter, fromEvent, Subscription } from "rxjs";

@Directive({
  selector:'[clickOutside]',
  standalone:true
})
export class ClickOutside implements AfterViewInit,OnDestroy {
  documentClickSubscription:Subscription | undefined;
  @Output() clickOutside = new EventEmitter<void>;
  constructor(private element:ElementRef,@Inject(DOCUMENT) private document:Document){

  }
  ngOnDestroy(): void {
    this.documentClickSubscription?.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.documentClickSubscription = fromEvent(this.document,'click')
    .pipe(
      filter((event) => {
        return !this.isInside(event.target as HTMLElement);
      })
    )
    .subscribe(() => {
      console.log('outside click event');
      this.clickOutside.emit();
    })
  }

  isInside(elementToCheck:HTMLElement):boolean {
    return elementToCheck === this.element.nativeElement || this.element.nativeElement.contains(elementToCheck)
  }


}