import * as notificationActions from '../actions/notification.action';

export interface NotificationState {
    lastNotification: {
        message: string;
        timeAdded: Date;
    };
    lastError: {
        message: string;
        timeAdded: Date;
    };
}

const initialState: NotificationState = {
    lastNotification: null,
    lastError: null
};

export function notificationReducer
    (state: NotificationState = initialState, action: notificationActions.AppNotificationTypes): NotificationState {
        switch (action.type) {
            case notificationActions.NOTIFICATION_SUCCESS:
                if (action.payload.isError) {
                    return { ...state,
                        lastError: {
                            message: action.payload.message,
                            timeAdded: new Date
                        }
                    };
                }

                return { ...state,
                    lastNotification: {
                        message: action.payload.message,
                        timeAdded: new Date
                    }
                };

            default:
                return state;
        }
}

export function getLastNotification (state: NotificationState): object {
    return state.lastNotification;
}

export function getLastError (state: NotificationState): object {
    return state.lastError;
}
