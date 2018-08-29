import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Go } from '../store';

// import {  } from '../auth/store';

@Injectable()
export class RouteGuard implements CanActivate {
  constructor(private store: Store<any/* fromTeam.TeamState */>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(''/* fromTeam.getAuthStatus */),
      map((authed: any) => {
        if (!authed) {
          this.store.dispatch(new Go({ path: ['/login'] }));

          return false;
        }

        return true;
      })
    );
  }
}
