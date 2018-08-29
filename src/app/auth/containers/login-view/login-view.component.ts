import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/reducers/auth.reducers';
import { AuthenticateAction } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {

  constructor(private store: Store<AuthState>) { }

  handleLogin (payload: { login: string, password: string }): void {
    this.store.dispatch(new AuthenticateAction(payload));
  }

}
