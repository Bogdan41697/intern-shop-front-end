import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './components/test/login/login.component';
import {RegistrationComponent} from './components/test/registration/registration.component';
import {ShopComponent} from './shop/containers/shop/shop.component';

const routes: Routes = [
  {path: 'shop', component: ShopComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: '**', redirectTo: 'shop', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
