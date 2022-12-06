import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    public title: Title,
    public meta: Meta
  ) { }

  SetMetaTitle(title: string) {
    this.title.setTitle(title);
  }

  SetMetaDescription(description: string) {
    this.meta.addTag({
      name: 'description',
      property: 'og:description',
      content: description,
    });
  }

  SetMetaImage(url: string){
    this.meta.addTag({
      name: 'image',
      property: 'og:image',
      content: url,
    })
  }
}
