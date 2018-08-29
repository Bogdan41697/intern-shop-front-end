import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

import { AppNotificationTypes } from '../../store/actions/notification.action';
import { State } from '../../store/reducers';
import { Observable, of } from 'rxjs';

@Injectable()
export class NotificationService {

    private barConfig: MatSnackBarConfig = {
      duration: 5000,
      panelClass: 'app-notification-text'
    };

    private barConfigError: MatSnackBarConfig = {
      duration: 5000,
      panelClass: 'app-notification-text-error'
    };

    private snackBarRef: MatSnackBarRef<SimpleSnackBar>;

    constructor(public snackBar: MatSnackBar) { }

    public showNotification (
      message: string = '',
      isError: boolean = false
    ): Observable<any> {

      const config: MatSnackBarConfig = isError ? this.barConfigError : this.barConfig;
      Promise.resolve(true)
        .then(() => {
          this.snackBarRef = this.snackBar.open(
            message,
            null,
            config
          );
        });

      return of({
        message,
        isError
      });

    }

}
