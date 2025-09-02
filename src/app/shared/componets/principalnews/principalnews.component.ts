import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsInterface } from 'src/app/interfaces/news-interface';
import { News } from 'src/app/service/news';

@Component({
  selector: 'app-principalnews',
  templateUrl: './principalnews.component.html',
  styleUrls: ['./principalnews.component.scss'],
    standalone: false

})
export class PrincipalnewsComponent  implements OnInit {
@Input() news: NewsInterface | null = null;
 ngOnInit() {
    
  }

}
