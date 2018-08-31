import { createSelector, MemoizedSelector } from '@ngrx/store';
import { getShopState, ShopState } from '../reducers';
import * as fromCategories from '../reducers/categories.reducer';
import { Category } from '../../../shared/models/category.model';

export const getCategories: MemoizedSelector<{}, fromCategories.CategoriesState> = createSelector (
  getShopState,
  (state: ShopState) => state.categories
);

export const getAllCategories: MemoizedSelector<{}, Category[]> = createSelector (
  getCategories,
  fromCategories.getCategories
);

export const getIsCategoriesLoading: MemoizedSelector<{}, boolean> = createSelector (
  getCategories,
  fromCategories.getCategoriesIsLoading
);

export const getIsCategoriesLoaded: MemoizedSelector<{}, boolean> = createSelector (
  getCategories,
  fromCategories.getCategoriesIsLoaded
);
