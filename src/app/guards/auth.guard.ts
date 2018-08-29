import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuth from '../auth/store';

@Injectable()
export class AuthGuard implements CanActivate {
  authorized$: Observable<boolean>;

  constructor(private store: Store<any>) {
    this.authorized$ = this.store.pipe(select(fromAuth.getIsAuthenticated));
  }

  canActivate(): Observable<boolean> {
    return this.authorized$;
  }
}
