import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { CartItem } from '../../store/reducers/cart.reducer';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent {
  @Input() products$: Observable<{[key: string]: CartItem}>;
  @Input() ids$: Observable<string[]>;

  @Output() quantityChange: EventEmitter<any> = new EventEmitter();
  @Output() removeFromCart: EventEmitter<any> = new EventEmitter();

  increase(id: string): void {
    this.quantityChange.emit({
      id,
      type: 'increase'
    });
  }

  decrease(id: string): void {
    this.quantityChange.emit({
      id,
      type: 'decrease'
    });
  }

  remove(id: string): void {
    this.removeFromCart.emit({id});
  }
}
