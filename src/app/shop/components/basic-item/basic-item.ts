import { Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../shared/models/product.model';

export default class BasicItem {
    @Input() product: Product;
    @Output() emitAddToCart: EventEmitter<string> = new EventEmitter<string>();

    private addToCart(): void {
        this.emitAddToCart.emit(this.product.id);
    }
}
