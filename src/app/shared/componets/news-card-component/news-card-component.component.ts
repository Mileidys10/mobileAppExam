import { Component, Input } from '@angular/core';
import {  NewsInterface } from 'src/app/interfaces/news-interface';


@Component({
   selector: 'app-news-card',
  templateUrl: './news-card-component.component.html',
  styleUrls: ['./news-card-component.component.scss'],
  standalone: false
})
export class NewsCardComponent {
  @Input() article: any;
//@Input() news: NewsInterface = {} as NewsInterface;
@Input() news!: NewsInterface;

  openArticle(url?: string) {
    if (!url) return;
    
    window.open(url, '_blank');
  }
}