import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Go } from '../store';

@Injectable()
export class RouteGuard implements CanActivate {
  // constructor(private store: Store<State>) {}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
  //   const observable = this.store.select(isAuthenticated);

  //   observable.subscribe(authenticated => {
  //     if (!authenticated) {
  //       this.store.dispatch(new Go({ path: ['/register'] }));
  //     }
  //   });

  //   return observable;
  // }
}
