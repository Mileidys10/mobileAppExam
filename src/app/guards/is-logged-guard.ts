import { CanActivateFn, Router } from '@angular/router';
import { StorageProvider } from '../shared/provide/storage-provider';
import { Root } from './auth-guard';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const sorage:StorageProvider = new StorageProvider();
  const r:Router = new Router();
  const user = sorage.get<Root>('user');
  if (user) {
    r.navigate(['/home']);
    return false;
  }
  return true;
};
