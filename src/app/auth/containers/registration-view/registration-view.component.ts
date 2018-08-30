import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/reducers/auth.reducers';
import { SignUpAction } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-registration-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['./registration-view.component.css']
})
export class RegistrationViewComponent {

  constructor(private store: Store<AuthState>) { }

  handleRegistration (payload: { login: string, password_group: {password: string} }): void {
    const registerData: {login: string, password: string} = {
      login: payload.login,
      password: payload.password_group.password
    };
    this.store.dispatch(new SignUpAction(registerData));
  }

}
