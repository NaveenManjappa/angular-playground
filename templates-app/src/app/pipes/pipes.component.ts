import { Component } from '@angular/core';
import { BuiltinPipesComponent } from './builtin-pipes/builtin-pipes.component';
import { TitleCasePipe } from '@angular/common';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

@Component({
  selector: 'pipes',
  standalone: true,
  imports: [BuiltinPipesComponent,CustomPipesComponent],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

}
