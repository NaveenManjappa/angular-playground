import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent implements OnInit {
  id :string | null = '';
   constructor(private activatedRoute: ActivatedRoute){
    
   }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

  }
}
