import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageProvider {
  constructor() { }


get<T>(key:string): T | null {
const data = localStorage.getItem(key)
if (data) {
  return JSON.parse(data) as T;
}
else{
  return null
}

}

set<T>(key:string,value:string){

localStorage.setItem(key,value)
}

}