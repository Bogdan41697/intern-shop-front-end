import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { LoginViewComponent } from './containers/login-view/login-view.component';
import { RegistrationViewComponent } from './containers/registration-view/registration-view.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
    HttpClientModule
  ],
  exports: [
    LoginFormComponent,
    RegistrationFormComponent,
    LoginViewComponent,
    RegistrationViewComponent
  ],
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent,
    LoginViewComponent,
    RegistrationViewComponent
  ],
  providers: [AuthService],
})
export class AuthModule { }
