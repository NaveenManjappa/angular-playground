import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from './services/comments.service';
import { HttpClient } from '@angular/common/http';
import { CommentComponent } from './comments/comment/comment.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CommentsComponent,CommentComponent,CommentFormComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[CommentsComponent,CommentComponent,CommentFormComponent],
  providers:[CommentsService]
})
export class CommentsModule { }
