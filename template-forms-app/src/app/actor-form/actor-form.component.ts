import { Component } from '@angular/core';
import { Actor } from '../actor';
import { Form, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ForbiddenNameDirective } from '../../shared/forbidden-name.directive';
import { UnambiguousRoleDirective } from '../../shared/unabiguous-role.directive';
import { UniqueRoleDirective } from '../../shared/unique-role.directive';

@Component({
  selector: 'app-actor-form',
  standalone: true,
  imports: [FormsModule,CommonModule,ForbiddenNameDirective,UnambiguousRoleDirective,UniqueRoleDirective],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css'
})
export class ActorFormComponent {

  skills = ['Method Acting','Singing','Dancing','Sword Fighting'];

  model = new Actor(18,'Tom Cruise','',this.skills[3],'CW Productions');

  submitted = false;

  onSubmit(actorForm:any) {
    console.log(actorForm.form);
    this.submitted = true;
  }

  newActor() {
    this.model = new Actor(42,'','','')
  }

  showFormControls(form:any) {
    return form && form.controls.name && form.controls.name.value;
  }
}
