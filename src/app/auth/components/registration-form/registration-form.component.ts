import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  registrationForm: FormGroup;
  @Output('register') register: EventEmitter<{login: string, password: string}> = new EventEmitter<{login: string, password: string}>();

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      login: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)])
    });
  }
}
