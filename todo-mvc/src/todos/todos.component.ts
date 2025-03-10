import { Component } from "@angular/core";
import { TodosHeaderComponent } from "./components/header/header.component";
import { TodosFooterComponent } from "./components/footer/footer.component";
import { TodosMainComponent } from "./components/main/main.component";

@Component({
  selector:'app-todos',
  templateUrl:'./todos.component.html',
  standalone:true,
  imports: [TodosHeaderComponent,TodosFooterComponent,TodosMainComponent]
})
export class TodosComponent {

}