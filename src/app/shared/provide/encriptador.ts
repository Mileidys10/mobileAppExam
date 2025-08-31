import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Encriptador {
  constructor(){


  }

  encriptar(password: string)  {
    const passEncriptada =password;
    return password; 
  }
}
