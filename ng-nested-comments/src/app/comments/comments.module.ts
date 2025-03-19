import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from './services/comments.service';
import { HttpClient } from '@angular/common/http';
import { CommentComponent } from './comments/comment/comment.component';



@NgModule({
  declarations: [CommentsComponent,CommentComponent],
  imports: [
    CommonModule
  ],
  exports:[CommentsComponent,CommentComponent],
  providers:[CommentsService]
})
export class CommentsModule { }
