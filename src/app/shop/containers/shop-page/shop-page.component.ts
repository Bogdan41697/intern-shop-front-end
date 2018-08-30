import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { Product } from '../../../shared/models/product.model';
import { Category } from '../../../shared/models/category.model';
import { FiltersObject } from './../../../shared/models/filters.model';

import * as fromStore from '../../store';
import * as fromProductsSelectors from '../../store/selectors/products.selector';
import * as fromCategoriesSelectors from '../../store/selectors/categories.selector';

@Component({
  selector: 'app-shop',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  products$: Observable<Product[]>;
  categories$: Observable<Category[]>;

  viewModeValue: boolean = false;
  viewMode$: Observable<string>;
  filters$: Observable<FiltersObject>;

  constructor(private store: Store<fromStore.ShopState>) {
    this.products$ = this.store.select(fromProductsSelectors.getAllProducts);
    this.categories$ = this.store.select(fromCategoriesSelectors.getAllCategories);

    this.viewMode$ = this.store.select(fromProductsSelectors.getProductsViewMode);
  }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadProducts());
    this.store.dispatch(new fromStore.LoadCategories());

    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViODY5MzU1YTc0NmYwM2M3ZmFjYjFkMSIsImxvZ2luIjoiRWx2aW4iLCJwYXNzd29yZCI6IiQyYiQxMiQ4dVFFelRCb0V0SUlueGdBWkRsSnNlS1p3OXBOamtSSXQ1UFhHdVJ0S2sxcFFkczRJWEhXaSIsImlhdCI6MTUzNTYxMzYyNSwiZXhwIjoxNTM1NjE2MzI1fQ.tO1GeSIxPBFwNJWQ32PZ6z--vcPbxTsTWt9QXw6RYys')
  }

  chooseViewMode(viewMode: string): void {
    if (viewMode === 'grid') {
      this.viewModeValue = false;
    } else {
      this.viewModeValue = true;
    }

    this.store.dispatch(new fromStore.ChangeViewMode(viewMode));
  }

  filters(filters: FiltersObject): void {
    this.store.dispatch(new fromStore.ApplyFilters(filters));
  }

  private addToCart($event: string): void {
    // TODO dispatch to card
    // event - id
  }
}
