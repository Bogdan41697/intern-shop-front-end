import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = localStorage.getItem('token');

    const reqAuth: HttpRequest<any> = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    req = token ? reqAuth : req;

    return next.handle(req);
  }
}
