import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as authActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import {
  AuthenticationErrorAction,
  AuthenticationSuccessAction,
  GetUserInfoFailAction,
  SignUpSuccessAction,
  GetUserInfoSuccessAction
} from '../actions/auth.actions';
import { User } from '../../models/user';
import { Go } from '../../../store';
import { AppNotificationShow } from '../../../store/actions/notification.action';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  signIn$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AUTHENTICATE),
    switchMap((action: authActions.AuthenticateAction) => {
      return this.authService
        .logIn(action['payload'].login, action['payload'].password)
        .pipe(
          map((user: User) => {
            return new AuthenticationSuccessAction({token: user.token});
          }),
          catchError((error: Error) => {
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
            return new SignUpSuccessAction({token: user.token});
          }),
          catchError((error: Error) => {
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
        map((user: User) => {
          return new AppNotificationShow({message: `User is logged in as "${user['payload'].login}"`, isError: false});
        }),
        catchError((error: Error) => of(new GetUserInfoFailAction(error)))
      );
    })
  );

  @Effect()
  signUpSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.SIGN_UP_SUCCESS),
    switchMap((action: authActions.SignUpSuccessAction) => {

      return this.authService.getUser(action['payload'].token).pipe(
        map((user: User) => new GetUserInfoSuccessAction(user)),
        map((user: User) => {
          return new AppNotificationShow({message: `"${user['payload'].login}" was successfully registered`, isError: false});
        }),
        catchError((error: Error) => of(new GetUserInfoFailAction(error)))
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
        catchError((error: Error) => of(new GetUserInfoFailAction({error: error})))
      );
    })
  );

  @Effect()
  signOut$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.SIGN_OUT),
    switchMap(() => [
      new AppNotificationShow({message: 'You are signed out', isError: false}),
      new Go({ path: ['/login'] })
    ])
  );

  @Effect() onFail$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.GET_USER_INFO_FAIL, authActions.AUTHENTICATE_ERROR),
    map((error: Error) => {
      console.log(error['payload']);

      return new authActions.SignOutAction();
    })
  );

  @Effect()
  authSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AUTHENTICATE_SUCCESS || authActions.SIGN_UP),
    map(() => new Go({ path: ['/shop'] }))
  );
}
