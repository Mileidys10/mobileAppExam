import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../shared-module';

import { IonCol, IonGrid, IonRow } from "@ionic/angular/standalone";
import { NewsInterface } from 'src/app/interfaces/news-interface';

@Component({
  selector: 'app-news-list-component',
  templateUrl: './news-list-component.component.html',
  styleUrls: ['./news-list-component.component.scss'],
  standalone: false
})
export class NewsListComponentComponent  implements OnInit {
@Input() news: any[] = [];
@Input() newsList: NewsInterface[] = [];
  constructor() { }

  ngOnInit() {}

}
