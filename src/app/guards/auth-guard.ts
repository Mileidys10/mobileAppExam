import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageProvider } from '../shared/provide/storage-provider';

export const authGuard: CanActivateFn = (route, state) => {
  const sorage:StorageProvider = new StorageProvider();
  const r:Router = new Router();
  const user = sorage.get<Root>('user');
  console.log(user);
  if (!user) {
    r.navigate(['/login']);
    return false;
  }
  return true;
};

export interface Root {
  id: string
  name: string
  lastName: string
  country: string
  email: string
  password: string
}
