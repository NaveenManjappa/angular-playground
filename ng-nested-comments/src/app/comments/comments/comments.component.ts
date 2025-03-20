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
      this.comments = comments;
    });
  }

  addComment({text,parentId}:{text:string,parentId:string | null}):void {
    console.log(text,parentId);
    this.commentService.createComment(text,parentId).subscribe(comment => {
      console.log(comment);
      this.comments = [...this.comments,comment];
      this.activeComment = null;
    })
  }

  getReplies(commentId:string):CommentInterface[]{
    return this.comments.filter(comment => comment.parentId === commentId).sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() );
  }

  setActiveComment(activeComment:ActiveCommentInterface | null):void {
    console.log('Actice comment',activeComment);
    this.activeComment = activeComment;
  }

  updateComment({text,commentId}:{text:string,commentId:string}):void {
    this.commentService.updateComment(commentId,text).subscribe(updatedComment => {
      this.comments = this.comments.map(comment => {
        if(comment.id === commentId)
          return updatedComment;
        return comment;
      });
      this.activeComment = null;
    });
  }

  deleteComment(id:string):void {
    this.commentService.deleteComment(id).subscribe(()=> {
      this.comments = this.comments.filter(c => c.id !== id);
    })
  }

}
