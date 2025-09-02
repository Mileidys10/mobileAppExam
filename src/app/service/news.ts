import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsInterface } from '../interfaces/news-interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class News {
  private apiUrl = 'https://newsapi.org/v2/top-headlines';
  private apiKey = '43a761e533804324bf4ecb99719364e2'; 
  constructor(private http: HttpClient) { }

//getNews(category = 'entertainment', country = 'us'): Observable<any> {
  //  const params = new HttpParams()
    //.set('country', country)
      //.set('category', category)
      //.set('apiKey', this.apiKey);
    //return this.http.get(this.apiUrl, { params });
  //}
  
getNews(category: string = 'entertainment'): Observable<{articles: NewsInterface[]}> {
  const params = new HttpParams()
    .set('country', 'us')
    .set('category', category)
    .set('apiKey', environment.newsApiKey);

  return this.http.get<{articles: NewsInterface[]}>(
    `${environment.newsApiUrl}/top-headlines`,
    { params }
  );
}
}