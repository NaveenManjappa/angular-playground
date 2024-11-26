import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './name-editor.component.html',
  styleUrl: './name-editor.component.css'
})
export class NameEditorComponent implements OnInit {
  name: FormControl = new FormControl('');

  ngOnInit() {
    this.name.valueChanges.subscribe(res =>{
      console.log(res);
    })
  }
}
