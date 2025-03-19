import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { CommentInterface } from '../types/comments.interface';

@Component({
  selector: 'comments',  
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  @Input() currentUserId!:string;
  comments:CommentInterface[] = [];

  constructor(private commentService:CommentsService) {    
    
  }
  ngOnInit(): void {
    this.commentService.getComments().subscribe(comments => {
      this.comments=comments;
    });
  }

  addComment({text,parentId}:{text:string,parentId:string | null}):void {
    console.log(text,parentId);
    this.commentService.createComment(text,parentId).subscribe(comment => {
      console.log(comment);
      this.comments = [...this.comments,comment];
    })
  }

}
