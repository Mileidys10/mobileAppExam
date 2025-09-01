import { Injectable } from '@angular/core';
import { StorageProvider } from '../provide/storage-provider';
import { Encriptador } from '../provide/encriptador';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private storageProvider: StorageProvider, private Encriptar:Encriptador) { }

  createUser(user: Iuser) {
    const users:Iuser[] = this.storageProvider.get<Iuser[]>('users') || [];
    user.password = this.Encriptar.encriptar(user.password);
    users.push(user);
    this.storageProvider.set('users', JSON.stringify(users));
   
  }


verifyUser(email: string, password: string): boolean {
   const users: Iuser[] = this.storageProvider.get<Iuser[]>('users') || [];
    const user = users.find(u => u.email === email);
  if (!user) {
    return false;
  }
  console.log(this.Encriptar.desencriptar(user.password));
  if (user.email === email && this.Encriptar.desencriptar(user.password) === password) {
    this.storageProvider.set('user', JSON.stringify(user));
    return true;
  } 
  return false;
}

updateUser(updatedUser: Iuser) {
  const users: Iuser[] = this.storageProvider.get<Iuser[]>('users') || [];
  const index = users.findIndex(u => u.id === updatedUser.id);
  if (index !== -1) {
    updatedUser.password = this.Encriptar.encriptar(updatedUser.password);
    users[index] = updatedUser;
    this.storageProvider.set('users', JSON.stringify(users));
 this.storageProvider.set('user', JSON.stringify(updatedUser));
  }
}


getUser(){
  return this.storageProvider.get<Iuser>('user');
}

getDecryptedPassword(user: Iuser): string {
  return this.Encriptar.desencriptar(user.password);
}

}    

export interface Iuser {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  country: string;



}

