import { ShopState, getShopState } from './../reducers';
import { createSelector } from '@ngrx/store';
import * as fromProducts from '../reducers/products.reducer';

export const getProducts = createSelector(
  getShopState,
  (state: ShopState) => state.products
);

export const getAllProducts = createSelector(
  getProducts,
  fromProducts.getProducts
);

export const getProductsLoaded = createSelector(
  getProducts,
  fromProducts.getProductsLoaded
);

export const getProductsLoading = createSelector(
  getProducts,
  fromProducts.getProductsLoading
);

export const getProductsViewMode = createSelector(
  getProducts,
  fromProducts.getProductsViewMode
);

export const getProductsCurrentFilters = createSelector(
  getProducts,
  fromProducts.getProductsFilters
);
