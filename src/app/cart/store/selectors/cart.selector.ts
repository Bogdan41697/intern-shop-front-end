
import { createSelector } from '@ngrx/store';
import { CartState } from '../reducers/cart.reducer';
import { getCartFeatureState, CartFeatureState } from '../reducers';

export const getCartState: any = createSelector(getCartFeatureState, (state: CartFeatureState): any => state.cart);

export const getTotalSum: any = createSelector(getCartState, (state: CartState) => state.totalSum);

export const getTotalCount: any = createSelector(getCartState, (state: CartState) => state.totalCount);

export const isEmpty: any = createSelector(getCartState, (state: CartState) => state.isEmpty);

export const getCartList: any = createSelector(getCartState, (state: CartState) => state.ids);

export const getCartProducts: any = createSelector(getCartState, (state: CartState) => state.products);
