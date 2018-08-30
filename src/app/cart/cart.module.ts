import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material/material.module';
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
    HttpClientModule,
    StoreModule.forFeature('cart', reducers)
  ],
  declarations: [
    CartPageComponent,
    CartItemsComponent,
    CartTotalComponent,
    CheckoutPageComponent
  ]
})
export class CartModule {}
