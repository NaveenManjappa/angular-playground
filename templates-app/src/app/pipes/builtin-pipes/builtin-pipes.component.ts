import { CurrencyPipe, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'builtin-pipes',
  standalone: true,
  imports: [TitleCasePipe,DatePipe,CurrencyPipe,UpperCasePipe],
  templateUrl: './builtin-pipes.component.html',
  styleUrl: './builtin-pipes.component.css'
})
export class BuiltinPipesComponent {

  company = 'abc technologoes';
  purchaseOn = 'Thu Jan 23 2025 18:53:16';
  amount = 123.45;

  today: number = Date.now();
}
