import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartState, CartItem } from '../../store/reducers/cart.reducer';
import * as cartSelectors from '../../store/selectors/cart.selector';
import * as cartActions from '../../store/actions';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  products$: Observable<{[key: string]: CartItem}>;
  ids$: Observable< string[] >;
  subs: Subscription;

  constructor(private store: Store<CartState>) { }

  ngOnInit(): void {
    this.products$ = this.store.select(cartSelectors.getCartProducts);
    this.ids$ = this.store.select(cartSelectors.getCartList);
  }

  quantityChange(event: any): void {
    if (event.type === 'decrease') {
      this.store.dispatch(new cartActions.Decrease(event.id));
    } else if (event.type === 'increase') {
      this.store.dispatch(new cartActions.Increase(event.id));
    }
  }

  removeFromCart(event: any): void {
    this.store.dispatch(new cartActions.RemoveProductFromCart(event.id));
  }

  clearCart(): void {
    this.store.dispatch(new cartActions.ClearCart());
  }
}
