// src/app/shared/service/user-service.ts
import { Injectable } from '@angular/core';
import { StorageProvider } from '../provide/storage-provider';
import { Encriptador } from '../provide/encriptador';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // BehaviorSubject para emitir cambios del usuario en sesión
  private currentUser$ = new BehaviorSubject<Iuser | null>(this.readUserFromStorage());

  constructor(private storageProvider: StorageProvider, private Encriptar: Encriptador) { }

  // lectura y escritura robusta en storage.. por si las moscas despues vere si lo borro
  private readUserFromStorage(): Iuser | null {
    const userRaw = this.storageProvider.get<any>('user');
    if (!userRaw) return null;

    try {
      if (typeof userRaw === 'string') {
        const parsed = JSON.parse(userRaw);
        return parsed ?? null;
      }
      return userRaw as Iuser;
    } catch (err) {
      console.error('Error parsing user from storage', err);
      return null;
    }
  }

  private readUsersFromStorage(): Iuser[] {
    const raw = this.storageProvider.get<any>('users');
    if (!raw) return [];
    try {
      if (typeof raw === 'string') {
        return JSON.parse(raw) as Iuser[] || [];
      }
      return raw as Iuser[];
    } catch (err) {
      console.error('Error parsing users from storage', err);
      return [];
    }
  }

  private saveUserToStorage(user: Iuser | null) {
    this.storageProvider.set('user', JSON.stringify(user));
    this.currentUser$.next(user);
  }

  // ---------- MÉTODOS PÚBLICOS REQUERIDOS ----------

  // observable para que componentes  se suscriban
  getCurrentUserObservable(): Observable<Iuser | null> {
    return this.currentUser$.asObservable();
  }

  getUser(): Iuser | null {
    return this.readUserFromStorage();
  }

  createUser(user: Iuser) {
    const users: Iuser[] = this.readUsersFromStorage();
    user.password = this.Encriptar.encriptar(user.password);
    users.push(user);
    this.storageProvider.set('users', JSON.stringify(users));
  }

  verifyUser(email: string, password: string): boolean {
    const users: Iuser[] = this.readUsersFromStorage();
    const user = users.find(u => u.email === email);
    if (!user) return false;

    const decrypted = this.Encriptar.desencriptar(user.password);
    if (user.email === email && decrypted === password) {
      this.saveUserToStorage(user);
      return true;
    }
    return false;
  }

  updateUser(updatedUser: Iuser) {
    const users: Iuser[] = this.readUsersFromStorage();
    const index = users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      
      const currentEncrypted = users[index].password;
      let currentDecrypted = '';
      try {
        currentDecrypted = this.Encriptar.desencriptar(currentEncrypted);
      } catch (e) {
        currentDecrypted = '';
      }

      if (updatedUser.password !== currentDecrypted) {
        updatedUser.password = this.Encriptar.encriptar(updatedUser.password);
      } else {
        updatedUser.password = users[index].password;
      }

      users[index] = updatedUser;
      this.storageProvider.set('users', JSON.stringify(users));

      
      this.saveUserToStorage(updatedUser);
    }
  }

  // romper sesion
  logout() {
    try {
      this.storageProvider.set('user', JSON.stringify(null));
    } catch {
      this.storageProvider.set('user', null as any);
    }
    this.currentUser$.next(null);
  }

  
  getDecryptedPassword(user: Iuser): string {
    return this.Encriptar.desencriptar(user.password);
  }
}


// interfaz Iuser 
export interface Iuser {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
}

