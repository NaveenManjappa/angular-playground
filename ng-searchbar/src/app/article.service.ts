import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleInterface } from './article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  http = inject(HttpClient);
  getArticles(searchValue:string):Observable<ArticleInterface[]>{
    return this.http.get<ArticleInterface[]>(`http://localhost:3000/articles?title_like=${encodeURIComponent(searchValue)}`);
  }
}
