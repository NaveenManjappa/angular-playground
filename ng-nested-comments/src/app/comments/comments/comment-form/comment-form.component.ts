import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'comment-form',  
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})
export class CommentFormComponent implements OnInit {
  @Input() submitLabel!:string;
  @Input() hasCancelButton:boolean = false;
  @Input() initialText:string = '';
  @Output() handleSubmit = new EventEmitter<string>();
  @Output() handleCancel = new EventEmitter<void>();
  form!:FormGroup;
  
  constructor(private fb:FormBuilder){ }
  ngOnInit(): void {
   this.form= this.fb.group({
      title:[this.initialText,Validators.required]
    });
  }

  onSubmit():void {
    console.log(this.form.value);
    this.handleSubmit.emit(this.form.value.title);
    this.form.reset();
  }

  
}
