import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleService } from './article.service';
import { ArticleInterface } from './article.interface';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'ng-searchbar';
  searchValue='';
  articles:ArticleInterface[]=[];
  articleService = inject(ArticleService);
  fb = inject(FormBuilder);

  searchForm = this.fb.nonNullable.group({
    searchValue: ''
  });

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData():void {
    this.articleService.getArticles(this.searchValue).subscribe(res => {
      this.articles=res;
    });
  }

  onSearchSubmit():void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }
}
