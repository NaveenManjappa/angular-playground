import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { fadeAnimation } from '../animations/route-animations';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [fadeAnimation]
})
export class AboutComponent implements OnInit {
  loading = true;

  constructor(private metaService: MetaService) {
    this.metaService.updateTags({
      title: 'About - Angular Routing Demo',
      description: 'Learn about the routing features demonstrated in this Angular application, including route guards, animations, and more.',
      url: window.location.href
    });
  }

  ngOnInit() {
    // Simulate loading state for route transition demo
    setTimeout(() => {
      this.loading = false;
    }, 800);
  }
}
