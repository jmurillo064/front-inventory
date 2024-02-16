import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

 export const guardGuard: CanActivateFn = 
 (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const router = inject(Router);
  const loginService = inject(LoginService);

  console.log("guard");

  //loginService.isLoggenIn || router.navigate(['/login']);

  !loginService.isLoggenIn || router.navigate(['/dashboard']);

  return true;
}; 
