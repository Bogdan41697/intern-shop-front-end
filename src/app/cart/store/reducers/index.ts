import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCart from './cart.reducer';

export interface CartFeatureState {
    cart: fromCart.CartState;
}

export const reducers: ActionReducerMap<CartFeatureState> = {
    cart: fromCart.reducer
};

export const getCartFeatureState: any = createFeatureSelector<CartFeatureState>(
    'cart'
);
