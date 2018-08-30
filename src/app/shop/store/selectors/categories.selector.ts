import { createSelector } from '@ngrx/store';
import { getShopState, ShopState } from '../reducers';
import * as fromCategories from '../reducers/categories.reducer';

export const getCategories = createSelector (
  getShopState,
  (state: ShopState) => state.categories
);

export const getAllCategories = createSelector (
  getCategories,
  fromCategories.getCategories
);

export const getIsCategoriesLoading = createSelector (
  getCategories,
  fromCategories.getCategoriesIsLoading
);

export const getIsCategoriesLoaded = createSelector (
  getCategories,
  fromCategories.getCategoriesIsLoaded
);