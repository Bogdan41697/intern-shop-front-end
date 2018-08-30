import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import * as fromServices from './../../../shared/services';
import * as productsActions from '../actions/products.action';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: fromServices.ProductsService
  ) {}

  @Effect()
  loadProducts$ = this.actions$.ofType(productsActions.LOAD_PRODUCTS).pipe(
      switchMap(() => {
        return this.productsService
          .getProducts()
          .pipe(
            map(products => {
              return new productsActions.LoadProductsSuccess(products['products']);
            }),
            catchError((error: Error) => of(new productsActions.LoadProductsFail(error)))
          )
      })
    )
  
  @Effect()
  applyFilters$ = this.actions$.pipe(
      ofType(productsActions.APPLY_FILTERS),
      switchMap((action: productsActions.ApplyFilters) => {
        return this.productsService
          .getProducts(action['payload'])
          .pipe(
            map(products => {
              return new productsActions.LoadProductsSuccess(products['products']);
            }),
            catchError((error: Error) => of(new productsActions.LoadProductsFail(error)))
          )
      })
    )
}
