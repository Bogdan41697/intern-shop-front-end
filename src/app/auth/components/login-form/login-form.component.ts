import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginForm: FormGroup;
  @Output('login') login: EventEmitter<{login: string, password: string}> = new EventEmitter<{login: string, password: string}>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)])
    });
  }
}
