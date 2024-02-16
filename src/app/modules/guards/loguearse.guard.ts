import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

export const loguearseGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  console.log("guard2");

  loginService.isLoggenIn || router.navigate(['/login']);

  //!loginService.isLoggenIn || router.navigate(['/login']);

  return true;
};
