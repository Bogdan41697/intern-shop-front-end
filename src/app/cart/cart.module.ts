import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxStripeModule } from 'ngx-stripe';

import { MaterialModule } from '../material/material.module';
import { CartEffects } from './store/effects/cart.effects';
import { reducers } from './store';

import { CartPageComponent } from './containers/cart-page/cart-page.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { CheckoutPageComponent } from './containers/checkout-page/checkout-page.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_vxuPixZMXI3nysGSQ8nvdOq0'),
    StoreModule.forFeature('cart', reducers),
    EffectsModule.forFeature([CartEffects])
  ],
  declarations: [
    CartPageComponent,
    CartItemsComponent,
    CartTotalComponent,
    CheckoutPageComponent
  ]
})
export class CartModule {}
