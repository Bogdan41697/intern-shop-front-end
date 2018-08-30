import { Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../shared/models/product.model';

export default class BasicItem {
    @Input() product: Product;

    @Output() emitAddToCart: EventEmitter<Product> = new EventEmitter<Product>();

    private addToCart(): void {
        this.emitAddToCart.emit(this.product);
    }
}
