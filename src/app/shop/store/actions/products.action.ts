import { FiltersObject } from './../../../shared/models/filters.model';
import { Action } from '@ngrx/store';
import { Product } from '../../../shared/models/product.model';

export const LOAD_PRODUCTS = '[Products] Load Products';
export const LOAD_PRODUCTS_FAIL = '[Products] Load Products Fail';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;
  constructor(public payload: any) { }
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) { }
}

export class ApplyFilters implements Action {
  readonly type = APPLY_FILTERS;
  constructor(public payload: FiltersObject) { }
}

export type ProductsActions = LoadProducts | LoadProductsFail | LoadProductsSuccess | ApplyFilters;
