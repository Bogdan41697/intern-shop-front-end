import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as fromReducer from '../reducers/notification.reducer';
import * as fromRootReducer from '../reducers';

export const getLastNotification: MemoizedSelector<object, object> =
    createSelector(fromRootReducer.getNotificationState, fromReducer.getLastNotification);
export const getLastError: MemoizedSelector<object, object> =
    createSelector(fromRootReducer.getNotificationState, fromReducer.getLastError);
