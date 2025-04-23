import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(private meta: Meta) {}

  updateTags(config: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  }) {
    const baseUrl = window.location.origin;
    const defaultImage = `${baseUrl}/assets/default-social.jpg`;

    this.meta.updateTag({ property: 'og:title', content: config.title || 'Angular Routing Demo' });
    this.meta.updateTag({ property: 'og:description', content: config.description || 'Explore Angular routing features with this comprehensive demo' });
    this.meta.updateTag({ property: 'og:image', content: config.image || defaultImage });
    this.meta.updateTag({ property: 'og:url', content: config.url || window.location.href });
    
    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title || 'Angular Routing Demo' });
    this.meta.updateTag({ name: 'twitter:description', content: config.description || 'Explore Angular routing features with this comprehensive demo' });
    this.meta.updateTag({ name: 'twitter:image', content: config.image || defaultImage });
  }
}