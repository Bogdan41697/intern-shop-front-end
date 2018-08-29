import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { NotificationService } from '../../shared/services/notification';
import * as notificationActions from '../actions/notification.action';
import { State } from '../../store/reducers';

@Injectable()
export class NotificationsEffects {
    constructor( private actions$: Actions, private service: NotificationService, private store: Store<State>) { }

    @Effect()
    notificate$: Observable<Action> = this.actions$
        .pipe(
            ofType(notificationActions.NOTIFICATION_NEW),
            switchMap((action: notificationActions.AppNotificationShow): any => {
                return this.service.showNotification(
                    action.payload.message,
                    action.payload.isError
                ).pipe(
                    map((payloadToDispatch: any) => new notificationActions.AppNotificationToState(payloadToDispatch))
                );
            })
        );
}
