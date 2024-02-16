import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor(
    private loginService: LoginService,
    private router: Router,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let url = req.url;
      if (url.includes('/login')) {
        return next.handle(req);
      }
      let token = this.loginService.userToken;
      let sendRequest = req;
    if (token) {
      const authToken = 'Bearer ' + token;
      const authReq = req.clone({ setHeaders: { Authorization: authToken } });
      sendRequest = authReq;
      return next.handle(sendRequest);
      /*return next.handle(sendRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );*/
    } else {
      localStorage.clear();
      this.router.navigate(['/error/401']);
      return throwError('401 unauthorized');
    }
    }

  


/*
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: String = this.loginService.userToken;
    if(''!=token){
      req=req.clone({
        setHeaders:{
          'Content-Type': 'application/json;charset=utf-8',
          'Accept': 'application/json',
          'Authorizacion': `Bearer ${token}`,
        },
      })
    }
    return next.handle(req);
  } */
}
