import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  registrationForm: FormGroup;
  @Output('register') register: EventEmitter<{login: string, password: string}> = new EventEmitter<{login: string, password: string}>();

  constructor() {
    this.registrationForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password_group: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        password_confirm: new FormControl('', [Validators.required, Validators.minLength(8)])
      }, this.passwordConfirming)
    });
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('password_confirm').value) {
      return { invalid: true };
    }
  }
}
