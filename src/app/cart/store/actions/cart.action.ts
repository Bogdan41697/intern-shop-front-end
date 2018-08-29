import { Action } from '@ngrx/store';
import { CartItem } from './../reducers/cart.reducer';

export const ADD_TO_CART: string = '[Cart] Add product to cart';
export const INCREASE: string = '[Cart] Increase product quantity';
export const DECREASE: string = '[Cart] Decrease product quantity';
export const REMOVE_PRODUCT_FROM_CART: string = '[Cart] Romove product from cart';
export const CLEAR_CART: string = '[Cart] Remove all products from cart';

export class AddToCart implements Action {
    readonly type: string = ADD_TO_CART;
    constructor(public payload: CartItem) {
    }
}

export class Increase implements Action {
    readonly type: string = INCREASE;
    constructor(public payload: string) {
    }
}

export class Decrease implements Action {
    readonly type: string = DECREASE;
    constructor(public payload: string) {
    }
}

export class RemoveProductFromCart implements Action {
    readonly type: string = REMOVE_PRODUCT_FROM_CART;
    constructor(public payload: string) {
    }
}

export class ClearCart implements Action {
    readonly type: string = CLEAR_CART;
}

export type Actions = AddToCart | Increase | Decrease | RemoveProductFromCart;
