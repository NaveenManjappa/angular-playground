import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { CommentInterface } from '../../types/comments.interface';
import { ActiveCommentType } from '../../types/active-comment-type.enum';
import { ActiveCommentInterface } from '../../types/active-comment.interface';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit{
 
  @Input() comment!:CommentInterface;
  @Input() currentUserId!:string;
  @Input() replies!:CommentInterface[];
  @Input() activeComment!:ActiveCommentInterface | null;
  @Input() parentId:string | null = null;

  @Output() setActiveComment = new EventEmitter<ActiveCommentInterface | null>();
  @Output() addComment = new EventEmitter<{text:string,parentId:string | null}>();
  @Output() updateComment = new EventEmitter<{text:string,commentId:string}>();

  @Output() deleteComment = new EventEmitter<string>();

  canReply:boolean = false;
  canEdit:boolean = false;
  canDelete:boolean=false;

  replyId:string | null =null;

  activeCommentType = ActiveCommentType;

  ngOnInit(): void {
    const fiveMins = 300000;
    
    const timePassed = (new Date().getTime() - new Date(this.comment.createdAt).getTime()) > fiveMins;

    console.log(new Date());
    console.log(new Date(this.comment.createdAt));
    console.log('Created At',this.comment.id,this.comment.createdAt,timePassed);
    this.canReply = Boolean(this.currentUserId);
    this.canEdit = this.currentUserId === this.comment.userId && !timePassed;
    this.canDelete = this.currentUserId === this.comment.userId && !timePassed && this.replies?.length === 0;
   this.replyId = this.parentId ? this.parentId : this.comment.id;
  }

  isReplying():boolean{
    
    if(!this.activeComment)
      return false;
    
    return (
      this.activeComment.id === this.comment.id && 
      this.activeComment.type === this.activeCommentType.replying
    );
  }

  isEditing():boolean{
    if(!this.activeComment)
      return false;
    return (
      this.activeComment.id === this.comment.id && 
      this.activeComment.type === this.activeCommentType.editing
    )
  }
}
