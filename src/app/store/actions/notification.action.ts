import { Action } from '@ngrx/store';

export const NOTIFICATION_NEW: string = 'NOTIFICATION_NEW';
export const NOTIFICATION_SUCCESS: string = 'NOTIFICATION_SUCCESS';

export class AppNotificationParams {
    message: string;
    isError: boolean;
}

export class AppNotificationShow implements Action {
    type: string = NOTIFICATION_NEW;
    constructor ( public payload: AppNotificationParams ) { }
}

export class AppNotificationToState implements Action {
    type: string = NOTIFICATION_SUCCESS;
    constructor ( public payload: AppNotificationParams ) { }
}

export type AppNotificationTypes =
  AppNotificationShow
| AppNotificationToState;
