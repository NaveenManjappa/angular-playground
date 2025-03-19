import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../types/comments.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient:HttpClient) { }

  getComments():Observable<CommentInterface[]>{
    return this.httpClient.get<CommentInterface[]>('http://localhost:3000/comments');
  }

  createComment(text:string,parentId:string|null):Observable<CommentInterface>{
    return this.httpClient.post<CommentInterface>('http://localhost:3000/comments',{body:text,parentId:parentId,createdAt:new Date().toISOString(),userId:'1',username:'John'})
  }
}
