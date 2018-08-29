import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartState, CartItem } from '../../store/reducers/cart.reducer';
import * as cartSelectors from '../../store/selectors/cart.selector';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})

export class CartTotalComponent implements OnInit {
  totalSum$: Observable<{[key: string]: CartItem}>;

  constructor(private store: Store<CartState>) { }

  ngOnInit(): void {
    this.totalSum$ = this.store.select(cartSelectors.getTotalSum);
  }

}
