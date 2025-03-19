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

}
