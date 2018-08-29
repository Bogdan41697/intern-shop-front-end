import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuth from '../auth/store';

@Injectable()
export class UnauthGuard implements CanActivate {
  authorized$: Observable<boolean>;
  isAuthorized: boolean;

  constructor(private store: Store<any>) {
    this.authorized$ = this.store.pipe(select(fromAuth.getIsAuthenticated));
    this.authorized$.subscribe((isAuthorized: boolean) => this.isAuthorized = isAuthorized);
  }

  canActivate(): boolean {
    return !this.isAuthorized;
  }
}
