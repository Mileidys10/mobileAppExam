import { Component, Input, Output,EventEmitter } from '@angular/core';
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
  @Output() open = new EventEmitter<NewsInterface>();


 onCardClick() {
    console.log('Card clickeada:', this.news);
    this.open.emit(this.news);
  }


  /*openArticle(url?: string) {
    if (!url) return;
    
    window.open(url, '_blank');
  }*/



  
}