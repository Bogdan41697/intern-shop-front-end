import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpEvent, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as AuthFeatureStore } from './../../auth/store/reducers';
import { SignOutAction } from './../../auth/store/actions';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private store: Store<AuthFeatureStore>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('yeah, this is a response');
        }
      }),
      catchError((res: HttpErrorResponse) => this.errorHandle(res))
    );
  }
  private errorHandle(err: HttpErrorResponse): any {
    if (err.status === (401 || 403)) {
       this.store.dispatch(new SignOutAction());
    }

    return throwError({message: err.message , code: err.status , error: err});
  }
}
