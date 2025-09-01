import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  constructor(private httpClient:HttpClient) { }


  
  
  async get<T>(url:string):Promise<T>{
    return new Promise((resolve, reject)=>{
      this.httpClient.get<T>(url).subscribe({
        next: (value) => resolve(value),
        error: (err) => reject(err)
      })
    });
  }
}
