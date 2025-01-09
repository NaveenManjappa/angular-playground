import { Component, computed, Input, input, model, numberAttribute } from '@angular/core';

@Component({
  selector: 'input-basics',
  standalone: true,
  imports: [],
  templateUrl: './input-basics.component.html',
  styleUrl: './input-basics.component.css',
  inputs:['disabled']
})
export class InputBasicsComponent {

  disabled = false;
  value = input(0,{ transform:numberAttribute });

  label = computed(()=> `The value is ${this.value()}`);

  widthPx = input('',{transform:appendPx});

  otherValue = input(0,{ alias:'sliderValue'});

  slideValue = model(0);

  @Input() inputProp='';

  increment(){
    this.slideValue.update(prev => prev+1);
  }

}

function appendPx(value:number):string {
  return `${value}px`;
}





