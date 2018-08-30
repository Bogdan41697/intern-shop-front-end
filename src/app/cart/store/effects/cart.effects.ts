import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as cartActions from '../actions/cart.action';
import { map } from 'rxjs/operators';
import { AppNotificationShow } from '../../../store';

@Injectable()
export class CartEffects {

  constructor(private actions$: Actions) {}

  @Effect()
  addToCart$: Observable<Action> = this.actions$.pipe(
    ofType(cartActions.ADD_TO_CART),
    map((action: cartActions.AddToCart) => new AppNotificationShow({
        message: `${action.payload.product.title} was added to cart`, isError: false
    }))
  );

}
