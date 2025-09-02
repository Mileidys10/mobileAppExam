import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/service/news';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.page.html',
  styleUrls: ['./news-page.page.scss'],
  standalone: false
})
export class NewsPagePage implements OnInit {
news:any[] = [];

  category = 'entertainment';


  constructor(private newsService:News,private route: ActivatedRoute) { }

   ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'] ?? 'entertainment';
      this.load();
    });
  }

  load() {
    this.newsService.getNews(this.category).subscribe((data: any) => {
      this.news = data.articles ?? [];
    }, err => {
      console.error('Error loading news', err);
      this.news = [];
    });
  }
}