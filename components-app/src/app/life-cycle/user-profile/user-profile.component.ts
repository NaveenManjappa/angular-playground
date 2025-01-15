import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges,afterNextRender, afterRender } from '@angular/core';

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {


  name = input<string>('');
  onInit = signal<string>('NA');
  onChange = signal<string>('NA');

  constructor() {
    afterNextRender(() => {
      console.log('After next render');
    });

    afterRender(() => {
      console.log('After render');
    });
  }

  ngOnInit(): void {
    this.onInit.set('ngOnInit');
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onChange.set('ngOnChange');
    console.log('ngOnChange');
    //console.log(changes);
    for(let prop in changes){
      //console.log(changes[prop].currentValue);
    }
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
 
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }



}
