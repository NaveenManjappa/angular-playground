import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Actor } from '../shared/actor';

@Component({
  selector: 'app-actor-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css'
})
export class ActorFormComponent implements OnInit {
  
  skills = ['Method Acting', 'Dancing', 'Singing','Sword Fighting'];
  model = new Actor(1,'Tom Cruise',this.skills[3],'CWR');
  submitted = false;

  actorForm = new FormGroup({
    name:new FormControl(this.model.name),
    skill:new FormControl(this.model.skill),
    studio:new FormControl(this.model.studio)
  });

  onSubmit(){
    console.log(this.actorForm);
    this.submitted=true;
  }

  newActor() {
    this.actorForm.reset();
  }
}
