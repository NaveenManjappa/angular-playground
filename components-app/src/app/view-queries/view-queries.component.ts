import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild, viewChildren } from '@angular/core';
import { ChildViewComponent } from "./child-view/child-view.component";
import { ContentQueryComponent } from "./content-query/content-query.component";
import { CustomExpandoComponent } from "./content-query/custom-expando/custom-expando.component";
import { CustomToggleComponent } from "./content-query/custom-toggle/custom-toggle.component";

@Component({
  selector: 'view-queries',
  standalone: true,
  imports: [ChildViewComponent, ContentQueryComponent, CustomExpandoComponent, CustomToggleComponent],
  templateUrl: './view-queries.component.html',
  styleUrl: './view-queries.component.css'
})
export class ViewQueriesComponent implements AfterViewInit {

  child = viewChild(ChildViewComponent);
  saveRef = viewChild<ElementRef<HTMLBRElement>>('save');
  //buttonRef = viewChild<HTMLButtonElement>('button');
  @ViewChild('button',{ static:true }) buttonRef?:ElementRef<HTMLButtonElement>;

  saveRefc = viewChildren('save');

  increment() {
    this.child()?.increment();
    this.saveRefc().map(el => console.log(el));
   
 }

 ngAfterViewInit(): void {
  if(this.buttonRef?.nativeElement)
    this.buttonRef.nativeElement.innerHTML = 'New increment';
  // if(this.saveRef()?.nativeElement)
  //   this.saveRef().nativeElement.innerHTML='Save New';
}

}
