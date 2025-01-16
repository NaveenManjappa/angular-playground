import { AfterContentInit, Component, ContentChild, contentChild, ContentChildren, QueryList } from '@angular/core';
import { CustomExpandoComponent } from './custom-expando/custom-expando.component';
import { CustomToggleComponent } from './custom-toggle/custom-toggle.component';

@Component({
  selector: 'content-query',
  standalone: true,
  imports: [],
  templateUrl: './content-query.component.html',
  styleUrl: './content-query.component.css'
})
export class ContentQueryComponent implements AfterContentInit {
  
  @ContentChild(CustomExpandoComponent) expando!: CustomExpandoComponent;//this will match the first content child component
  @ContentChildren(CustomExpandoComponent) expandoC!: QueryList<CustomExpandoComponent>;//this will try to match all the direct descedants of content child component

  @ContentChild(CustomToggleComponent) toggleC!: CustomToggleComponent;
  @ContentChildren(CustomToggleComponent) toggle!: QueryList<CustomToggleComponent>;//this will not work in this example as custom-toggle is not a direct descendant of the content query
  


  ngAfterContentInit(): void {
    this.expando.text = 'Text changed in content query component';
    this.toggleC.text = 'Toggle text changed in content query component';
    console.log('toggleC',this.toggleC);
    console.log(this.toggle);
    console.log(this.expandoC);
    this.expandoC.forEach(expando=>console.log(expando.text));
  }

}
