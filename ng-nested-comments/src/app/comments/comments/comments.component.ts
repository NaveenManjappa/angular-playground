import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { CommentInterface } from '../types/comments.interface';
import { ActiveCommentInterface } from '../types/active-comment.interface';

@Component({
  selector: 'comments',  
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  @Input() currentUserId!:string;
  comments:CommentInterface[] = [];
  activeComment:ActiveCommentInterface | null = null;
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

  getReplies(commentId:string):CommentInterface[]{
    return this.comments.filter(comment => comment.parentId === commentId).sort((a,b) => new Date(a.createdAt).getMilliseconds() - new Date(b.createdAt).getMilliseconds() );
  }

  setActiveComment(activeComment:ActiveCommentInterface | null):void {
    this.activeComment = activeComment;
  }

}
