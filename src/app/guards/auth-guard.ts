import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  let authData = localStorage.getItem('auth');
  
  if (!authData) {
    localStorage.setItem('auth', JSON.stringify({ auth: false }));
    authData = localStorage.getItem('auth');
  }

  const isAuth = JSON.parse(authData!).auth === true;

  if (isAuth) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
