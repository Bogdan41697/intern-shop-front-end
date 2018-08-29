import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromGuards from './guards';

import { ShopPageComponent } from './shop/containers/shop-page/shop-page.component';
import { CartPageComponent } from './cart/containers/cart-page/cart-page.component';
import { LoginViewComponent } from './auth/containers/login-view/login-view.component';
import { RegistrationViewComponent } from './auth/containers/registration-view/registration-view.component';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: 'register', component: RegistrationViewComponent },
  { path: 'shop', component: ShopPageComponent, canActivate: [fromGuards.RouteGuard] },
  { path: 'cart', component: CartPageComponent, canActivate: [fromGuards.RouteGuard] },
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: '**', redirectTo: 'shop', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    fromGuards.RouteGuard
  ]
})
export class AppRoutingModule {}
