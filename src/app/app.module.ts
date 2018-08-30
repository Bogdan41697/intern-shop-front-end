import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { reducers, effects, CustomSerializer } from './store';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './shop/shop.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationService } from './shared/services/notification';

const environment: { development: boolean; production: boolean; } = {
  development: true,
  production: false
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    ShopModule,
    AuthModule,
    CartModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    environment.development ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    NotificationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
