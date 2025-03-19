import { Component, Input } from '@angular/core';
import { CommentInterface } from '../../types/comments.interface';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() comment!:CommentInterface;


}
