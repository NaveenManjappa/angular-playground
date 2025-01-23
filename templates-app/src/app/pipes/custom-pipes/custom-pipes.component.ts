import { Component } from '@angular/core';
import { MyCustomTransformationPipe } from '../CustomPipes/my-transformation.pipe';

@Component({
  selector: 'custom-pipes',
  standalone: true,
  imports: [MyCustomTransformationPipe],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.css'
})
export class CustomPipesComponent {

  name = 'John Lewis';
}
