import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class Encriptador {
  private key: string = 'una-llave-secreta';

  constructor() {}

  encriptar(texto: string): string {
    return CryptoJS.AES.encrypt(texto, this.key).toString();
  }

  desencriptar(textoEncriptado: string): string {
    const bytes = CryptoJS.AES.decrypt(textoEncriptado, this.key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
