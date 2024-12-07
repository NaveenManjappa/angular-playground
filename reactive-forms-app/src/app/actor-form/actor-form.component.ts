import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Actor } from '../shared/actor';
import { forbiddenNameValidator } from '../shared/forbiddenName';

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
  actorForm!: FormGroup;

  ngOnInit(): void {
    this.actorForm = new FormGroup({
      name:new FormControl(this.model.name,[
        Validators.required,
        Validators.minLength(3),
        forbiddenNameValidator(/bob/i)
      ]),
      skill:new FormControl(this.model.skill,Validators.required),
      studio:new FormControl(this.model.studio)
    });
  }


  onSubmit(){
    console.log(this.actorForm);
    this.submitted=true;
  }

  newActor() {
    this.actorForm.reset();
  }

  onEdit(){
    this.submitted = false;
  }

  get name() {
    return this.actorForm.get('name');
  }

  get studio() {
    return this.actorForm.get('studio');
  }

  get skill(){
    return this.actorForm.get('skill');
  }
}
