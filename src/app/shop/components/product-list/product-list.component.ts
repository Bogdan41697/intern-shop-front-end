import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() viewMode$: Observable<string>;
  @Input() products$: Observable<Product[]>;

  @Output() emitAddToCart: EventEmitter<string> = new EventEmitter<string>();

  private isListType: boolean = true;

  private addToCart($event: string): void {
    this.emitAddToCart.emit($event);
  }
}
