import { ShopState, getShopState } from './../reducers';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import * as fromProducts from '../reducers/products.reducer';
import { Product } from '../../../shared/models/product.model';
import { FiltersObject } from '../../../shared/models/filters.model';

export const getProducts: MemoizedSelector<{}, fromProducts.ProductsState> = createSelector(
  getShopState,
  (state: ShopState) => state.products
);

export const getAllProducts: MemoizedSelector<{}, Product[]> = createSelector(
  getProducts,
  fromProducts.getProducts
);

export const getProductsLoaded: MemoizedSelector<{}, boolean> = createSelector(
  getProducts,
  fromProducts.getProductsLoaded
);

export const getProductsLoading: MemoizedSelector<{}, boolean> = createSelector(
  getProducts,
  fromProducts.getProductsLoading
);

export const getProductsViewMode: MemoizedSelector<{}, string> = createSelector(
  getProducts,
  fromProducts.getProductsViewMode
);

export const getProductsCurrentFilters: MemoizedSelector<{}, FiltersObject> = createSelector(
  getProducts,
  fromProducts.getProductsFilters
);
