import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as authActions from '../actions/auth.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthenticationErrorAction, AuthenticationSuccessAction, GetUserInfoFailAction,
  GetUserInfoSuccessAction } from '../actions/auth.actions';
import { User } from '../../models/user';
import { Go } from '../../../store';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  // effects go here
  @Effect()
  signIn$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AUTHENTICATE),
    switchMap((action: authActions.AuthenticateAction) => {

      return this.authService.logIn(action['payload'].login, action['payload'].password)
        .pipe(
          map((user: User) => {

            return new AuthenticationSuccessAction({token: user.token});
          }),
          catchError((error) => {
            return of(new AuthenticationErrorAction(error));
          })
        );
    })
  );

  @Effect()
  signUp$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.SIGN_UP),
    switchMap((action: authActions.SignUpAction) => {

      return this.authService.signUp(action['payload'].login, action['payload'].password)
        .pipe(
          map((user: User) => {

            return new AuthenticationSuccessAction({token: user.token});
          }),
          catchError((error) => {
            return of(new AuthenticationErrorAction({error: error}));
          })
        );
    })
  );

  @Effect()
  signInSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AUTHENTICATE_SUCCESS),
    switchMap((action: authActions.AuthenticationSuccessAction) => {

      return this.authService.getUser(action['payload'].token).pipe(
        map((user: User) => new GetUserInfoSuccessAction(user)),
        catchError((error) => of(new GetUserInfoFailAction(error)))
      );
    })
  );

  @Effect()
  getUser$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.GET_USER_INFO),
    switchMap((action: authActions.GetUserInfoAction) => {
      if (!action.payload) {
        return of(new GetUserInfoFailAction('no token'));
      }

      return this.authService.getUser(action.payload).pipe(
        map((user: User) => new GetUserInfoSuccessAction(user)),
        catchError(error => of(new GetUserInfoFailAction({error: error})))
      );
    })
  );

  @Effect() onFail$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.GET_USER_INFO_FAIL, authActions.AUTHENTICATE_ERROR),
    map((error) => {
      // debugger;
      console.log(error['payload']);

     return new authActions.SignOutAction();
    })
  );

  @Effect()
  getUserInfoSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.GET_USER_INFO_SUCCESS),
    map(() => new Go({ path: ['/shop'] }))
  );

  @Effect()
  signOut$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.SIGN_OUT),
    map(() => new Go({ path: ['/login'] }))
  );
}
