import * as fromCategories from './categories.reducer';
import * as fromProducts from './products.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface ShopState {
  products: fromProducts.ProductsState;
  categories: fromCategories.CategoriesState;
}

export const reducers: ActionReducerMap<ShopState> = {
  products: fromProducts.reducer,
  categories: fromCategories.reducer
};

export const getShopState = createFeatureSelector<ShopState>(
  'shop'
);
