import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

interface User {
  id:number,
  name:string,
  email:string
}

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})
export class UserSearchComponent implements OnInit {
  users: User[] = [];
  loading = false;
  searchControl = new FormControl('');

  constructor(){

  }

  ngOnInit() {
    //Subscribe to search input changes
    this.searchControl.valueChanges.pipe(

      //Wait for 300ms pause in tying
      debounceTime(3000),

      //Only emit if the value has changed
      distinctUntilChanged(),

      //Show loading state
      tap(() => this.loading = true),

      //Switch to new Http request, cancelling the previous one
      switchMap(val => {
        console.log(val);
        if(val){
          return of({ id:3,name:'User 3', email:'User3@test.com'});
        }
        else {
          return of([]);
        }

      })


    )
    .subscribe({
      next: (users) => {
        console.log('Input',users);
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
      }
    })
  }
}
