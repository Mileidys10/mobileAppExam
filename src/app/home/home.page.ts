import { Component } from '@angular/core';
import { News } from '../service/news';
import { SharedModule } from '../shared/shared-module';
import { NewsInterface } from '../interfaces/news-interface';

import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../shared/componets/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
 newsList: NewsInterface[] = [];
principalNews: NewsInterface | null = null;
  constructor(private news: News, private modalCtrl: ModalController) {}

 ngOnInit() {
    this.loadNews();
  }

  loadNews() {
     this.news.getNews().subscribe((response: { articles: any; }) => {
      const allNews = response.articles;
      this.principalNews = allNews[0];
      this.newsList = allNews.slice(1);
    });
  }

  async openModal(news: NewsInterface) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: { news }
    });
    await modal.present();
  }


  
}
