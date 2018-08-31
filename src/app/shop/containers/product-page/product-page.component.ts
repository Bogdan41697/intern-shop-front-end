import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store , select} from '@ngrx/store';
import { AddToCart } from './../../../cart/store/actions';
import { Product } from '../../../shared/models/product.model';
import * as fromStore from '../../store';
import * as fromProductsSelectors from '../../store/selectors/products.selector';
import { CartState } from '../../../cart/store/reducers/cart.reducer';
import * as productsAction from '../../store/actions';
import * as productsSelectors from '../../store/selectors';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent implements OnInit {
  id: string;
  products$: Observable<Product[]>;
  count: number = 1;
  loading$: Observable<boolean>;
  product: Product;
  regex: RegExp = new RegExp(/^[0-9]+$/g);

  constructor(private route: ActivatedRoute, 
              private store: Store<CartState>) {
    this.products$ = this.store.select(fromProductsSelectors.getAllProducts);
  }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(	
      select(productsSelectors.getProductsLoading)	
    );
    this.getProduct();
    this.store.dispatch(new fromStore.LoadProducts());
  }

  getProduct(): void {
    this.id = this.route.snapshot.params.id;
    this.store.dispatch(new productsAction.LoadProducts());

    this.store.pipe(
        select(productsSelectors.getAllProducts)
      ).subscribe((products: Product[]) => {
        this.product = products.find((product: Product) => product.id === this.id);
    });
  }

  increase(): void {
    if (this.count < this.product.stock) {
      this.count += 1;
    }
  }

  decrease(): void {
    if (this.count > 1) {
      this.count -= 1;
    }
  }

  addToCard(): void {
    this.store.dispatch(new AddToCart({
      product: this.product,
      quantity: this.count
    }));
  }
  numberOnly(event: KeyboardEvent): any {
    const currMount: string = this.count + event.key;
    if (!currMount.match(this.regex)) {
      event.preventDefault();
    }
  }

}
